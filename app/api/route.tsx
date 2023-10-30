import { Resend } from "resend";

export async function POST(request: Request) {
    const APIKEY = "re_CjzAQcqi_FN9GRytDAugfft8NoBEb68Yy";

    const resend = new Resend(APIKEY);

    const parsedRequest = await request.json();

    await resend.emails.send({
        from: 'Tomas <tomas@tranqui.eest5.com.ar>',
        to: ['info@tmdm.com.ar'],
        subject: 'New message from Tranqui',
        text: parsedRequest?.message ?? "",
    });

    return Response.json({
        message: "Sent!",
    });
}