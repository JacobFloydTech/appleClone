"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger)

export default function Overview() {
    let [fixed, setFixed] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            console.log(window.scrollY);
            if (window.scrollY >= 50) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        })
    })
    return (
        <div id='overview' className={"w-full h-auto flex py-2 text-white bg-black " + (fixed ? " fixed top-0 z-50" : null)}>
            <p className="ml-[201px] text-2xl font-semibold">iPhone 14 Pro</p>
            <ul className="flex w-auto mx-auto text-sm py-2 pl-40">
                <p className="mx-2 text-gray-400">Overview</p>
                <p className="mx-2">Switch from Android to iPhone</p>
                <p className="mx-2">Tech Specs</p>
                <p className="mx-2 bg-blue-500 flex px-2 rounded-full">Buy</p>
            </ul>
        </div>
    )
}