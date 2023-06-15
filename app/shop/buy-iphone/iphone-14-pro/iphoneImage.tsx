'use client';

import { useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function IPhoneImage() {
    let [right, setRight] = useState(false);
    let [hover, setHover] = useState(false);
    let [fixed, setFixed] = useState(false);
    useEffect(() => {
        gsap.set("#container", { x: -50 })
        gsap.fromTo("#fullcontainer", { y: 0, }, {
            y: 950, duration: 1, ease: "none", scrollTrigger: {
                trigger: "#fullcontainer",
                start: "top 20%",
                end: 1200,
                scrub: 0.2,
            }
        })
    }, [])

    function animate(n: number) {
        gsap.to("#container", { x: n, duration: 0.5 })
        setRight(right => !right);

    }
    return (
        <div className="h-auto relative z-50">
            <div id='fullcontainer' className={"inline-block rounded-3xl w-[750px] h-[420px] overflow-hidden bg-gray-100 absolute"}>
                <div id='container' className="w-[1500px] flex">
                    <img id="img" src={"/apple/shop/twoiphones.jpeg"} className="w-[750px] rounded-3xl h-auto mr-auto"></img>
                    <img id="img2" src={"/apple/shop/iphoneslidetwo.jpeg"} className="w-[750px] rounded-3xl h-auto ml-auto"></img>
                </div>
                <div id='dots' className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-auto h-auto flex">
                    <div className={"w-2 h-2 rounded-full " + (right ? "bg-gray-400" : "bg-gray-700")}></div>
                    <div className={"ml-[15px] w-2 h-2 rounded-full " + (right ? "bg-gray-700" : "bg-gray-400")}></div>
                </div>
                {!right && <div onClick={() => animate(-750)} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={"w-12 h-12 rounded-full justify-center items-center flex text-4xl absolute top-1/2 right-4 " + (hover ? "bg-gray-300" : "bg-gray-400")}>
                    {">"}
                </div>}
                {right && <div onClick={() => animate(-50)} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={"w-12 h-12 rounded-full justify-center items-center flex text-4xl absolute top-1/2 left-4 " + (hover ? "bg-gray-300" : "bg-gray-400")}>
                    {"<"}
                </div>}
            </div>
        </div>
    )
}