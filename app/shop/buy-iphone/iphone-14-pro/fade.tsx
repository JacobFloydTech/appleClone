"use client";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Context } from "./page";
import { gsap } from "gsap";
export default function Fade() {
    const { top, setTop } = useContext(Context);

    useLayoutEffect(() => {
        gsap.set("#fade", { top: top, visibility: 'visible' })
    }, [])
    useEffect(() => {
        if (top == 0) {
            gsap.set("#fade", { visibility: "hidden" })
        } else {
            gsap.to("#fade", { top: top, duration: 0.3 })
        }

    }, [top, setTop])
    return (
        <div id="fade" className={`absolute h-full bg-white bg-opacity-40 w-full z-30 invisible`}></div>

    )
}