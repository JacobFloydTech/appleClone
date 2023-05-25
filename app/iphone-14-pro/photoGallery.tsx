"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
export default function PhotoGallery() {
    let [purple, setPurple] = useState({ show: true, text: "Deep Purple", src: '/apple/iphone14Pro/phonepurple.jpg' });
    let [gold, setGold] = useState({ show: false, text: "Gold", src: '/apple/iphone14Pro/phonegold.jpg' });
    let [silver, setSilver] = useState({ show: false, text: "Silver", src: '/apple/iphone14Pro/phonesilver.jpg' });
    let [black, setBlack] = useState({ show: false, text: "Space Black", src: '/apple/iphone14Pro/phoneblack.jpg' });
    let [src, setSrc] = useState('/apple/iphone14Pro/phonepurple.jpg')
    let states = [[purple, setPurple], [gold, setGold], [silver, setSilver], [black, setBlack]]
    function changeState(state: any) {
        states.forEach((x) => {
            if (x[0] != state) {
                x[1]({
                    ...x[0],
                    show: false,
                })
            } else {
                x[1]({
                    ...x[0],
                    show: true,
                })
                let tl = gsap.timeline()
                tl.fromTo("#img", { opacity: 1 }, { opacity: 0, duration: 0.75, onComplete: () => { setSrc(x[0].src) } })
                tl.fromTo("#img", { opacity: 0 }, { opacity: 1, duration: 0.75 })
            }
        })
    }
    return (
        <div className="relative">
            <div className="w-full bg-black h-full top-0 left-0 absolute -z-10"></div>
            <div className="flex">
                <p className="text-gray-600 font-semibold w-auto h-auto text-6xl ml-[120px] opacity-90 mt-10">Pro. Beyond</p>
                <ul className="flex w-auto justify-center align-center mt-[70px] ml-[400px]">
                    {states.map((state: any) => {
                        if (state[0].show) {
                            return (
                                <p className="text-white mr-8 text-xl font-semibold w-[120px] text-center">{state[0].text}</p>
                            )
                        }
                    })}
                    <div onClick={() => { changeState(purple) }} className={"rounded-full mr-4 relative w-[30px] h-[30px] bg-black " + (purple.show ? " border-blue-500 border-2" : null)}>
                        <button className="h-[20px] w-[20px] rounded-full bg-purple-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
                    </div>
                    <div onClick={() => { changeState(gold) }} className={"rounded-full mr-4 relative w-[30px] h-[30px] bg-black" + (gold.show ? " border-blue-500 border-2" : null)}>
                        <button className="h-[20px] w-[20px] rounded-full bg-yellow-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
                    </div>
                    <div onClick={() => { changeState(silver) }} className={"rounded-full mr-4 relative w-[30px] h-[30px] bg-black" + (silver.show ? " border-blue-500 border-2" : null)}>
                        <button className=" h-[20px] w-[20px] rounded-full bg-gray-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
                    </div>
                    <div onClick={() => { changeState(black) }} className={"rounded-full mr-4 relative w-[30px] h-[30px] bg-black" + (black.show ? " border-blue-500 border-2" : null)}>
                        <button className=" h-[20px] w-[20px] rounded-full bg-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></button>
                    </div>

                </ul>
            </div>
            <img id='img' src={src} className="pt-[65px] mx-auto" />
        </div>
    )
}