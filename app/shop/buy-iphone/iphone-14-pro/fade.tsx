"use client";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Context } from "./page";
import { gsap } from "gsap";
export default function Fade() {
    const { height, setHeight } = useContext(Context);



    useLayoutEffect(() => {
        gsap.set("#fade", { height: height, visibility: 'visible', })
    }, [])
    useEffect(() => {
        if (height == 0) {
            gsap.to("#fade", { height: height, duration: 0.3, onComplete: () => { gsap.set("#fade", { visibility: 'hidden' }) } })
        }
        else {
            gsap.to("#fade", { height: height, duration: 0.3 })
        }
    }, [height, setHeight])

    return (
        <div id="fade" className={`absolute bg-white bg-opacity-40 w-full z-40 invisible bottom-0`}></div>

    )
}