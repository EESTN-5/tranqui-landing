import { cubicBezier } from "framer-motion";

export const ANIMATIONS = {
    transition: { duration: 0.3, ease: cubicBezier(.6,.6,0,.1) },
    text_initial: {opacity: 0, y: 20, filter: 'blur(10px)' },
    text_whileInView: {opacity: 1, y: 0, filter: 'blur(0px)' },
}