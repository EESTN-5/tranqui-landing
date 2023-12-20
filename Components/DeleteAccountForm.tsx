import { supabase } from "@/lib/createClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/app/eliminar-cuenta/delete.module.scss";

export const DeleteAccountForm = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [showCodeInput, setShowCodeInput] = useState(false);
    const router = useRouter();

    const handleCodeSend = () => {
        if (!email) return;
        // Send code to email
        supabase.from("users").select("*").eq("email", email).then((data) => {
            if (data?.data && data?.data.length > 0) {
                supabase.auth.signInWithOtp({
                    email: email,
                });
                setShowCodeInput(true);
            } else {
                alert("No se encontró un usuario con ese email");
            }
        })
    }

    const handleAccountDelete = async () => {
        const { data, error } = await supabase.from("users").select("*").eq("email", email).single();

        const uid = data?.id;

        await supabase.from("activities").delete().eq("user_id", uid);
        await supabase.from("contactos_cercanos").delete().eq("user_id", uid);
        await supabase.from("distraerse").delete().eq("user_id", uid);
        await supabase.from("emergencia").delete().eq("user_id", uid);
        await supabase.from("razones").delete().eq("user_id", uid);
        await supabase.from("saved_videos").delete().eq("user_id", uid);
        await supabase.from("warning_signals").delete().eq("id", uid);
        await supabase.from("users").delete().eq("id", uid);

        supabase.auth.signOut().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                router.push("/")
            }
        });
    }

    const handleLogin = () => {
        supabase.auth.verifyOtp({
            email: email,
            token: code,
            type: "email",
        }).then((data) => {
            if (data.data.session?.access_token) {
                supabase.auth.setSession({
                    access_token: data.data.session?.access_token,
                    refresh_token: data.data.session?.refresh_token,
                }).then((data) => {
                    if (data.error) {
                        console.log(data.error);
                    } else {
                        handleAccountDelete();
                    }
                });
            }
        });
    }

    return (
        <section className={styles.unsuscribeForm}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} disabled={showCodeInput} />
            {showCodeInput && <input type="text" placeholder="Código" onChange={(e) => setCode(e.target.value)} />}
            <button onClick={showCodeInput ? handleLogin : handleCodeSend}>{showCodeInput ? "Eliminar cuenta" : "Enviar código"}</button>
        </section>
    );
}