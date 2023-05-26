"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
export default function PhotoGallery() {
    interface Colour {
        text: string,
        src: string,
    }
    let [colours, setColours] = useState<Colour[]>([{ text: "Deep Purple", src: '/apple/iphone14Pro/phonepurple.jpg' }, { text: "Gold", src: '/apple/iphone14Pro/phonegold.jpg' }, { text: "Silver", src: '/apple/iphone14Pro/phonesilver.jpg' }, { text: "Space Black", src: '/apple/iphone14Pro/phoneblack.jpg' }])
    let [current, setCurrent] = useState({ color: colours[0] });
    let [src, setSrc] = useState(current.color.src)
    function changeState(color: string) {
        colours.forEach((item: Colour, index: number) => {
            if (color == item.text) {
                setCurrent({ color: colours[index] })
                gsap.fromTo("#img", { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.9, duration: 0.75, onComplete: () => { (async () => { await setSrc(current.color.src); gsap.fromTo("#img", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.75 }) })(); } })
                gsap.fromTo("#col", { opacity: 1 }, { opacity: 0, duration: 0.75, onComplete: () => { gsap.fromTo("#col", { opacity: 0 }, { opacity: 1, duration: 0.75 }) } })
            }
        })
    }
    return (
        <div className="relative">
            <div className="w-full bg-black h-full top-0 left-0 absolute -z-10"></div>
            <div className="flex">
                <p className="text-gray-600 font-semibold w-auto h-auto text-6xl ml-[120px] opacity-90 mt-10">Pro. Beyond</p>
                <ul className="flex w-auto justify-center align-center mt-[70px] ml-[400px]">
                    <p id="col" className="text-white font-semibold text-xl mr-6 text-right w-[150px]">{current.color.text}</p>
                    <div onClick={() => { changeState("Deep Purple") }} className={"rounded-full mr-4 relative w-[30px] h-[30px] bg-black " + (current.color.text == 'Deep Purple' ? " border-blue-500 border-2" : null)}>
                        <button className="h-[20px] w-[20px] rounded-full bg-purple-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
                    </div>
                    <div onClick={() => { changeState("Gold") }} className={"rounded-full mr-4 relative w-[30px] h-[30px] bg-black" + (current.color.text == 'Gold' ? " border-blue-500 border-2" : null)}>
                        <button className="h-[20px] w-[20px] rounded-full bg-yellow-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
                    </div>
                    <div onClick={() => { changeState("Silver") }} className={"rounded-full mr-4 relative w-[30px] h-[30px] bg-black" + (current.color.text == 'Silver' ? " border-blue-500 border-2" : null)}>
                        <button className=" h-[20px] w-[20px] rounded-full bg-gray-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
                    </div>
                    <div onClick={() => { changeState("Space Black") }} className={"rounded-full mr-4 relative w-[30px] h-[30px] bg-black" + (current.color.text == 'Space Black' ? " border-blue-500 border-2" : null)}>
                        <button className=" h-[20px] w-[20px] rounded-full bg-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
                    </div>

                </ul>
            </div>
            <img id='img' src={current.color.src} className="pt-[65px] mx-auto" />
        </div>
    )
}