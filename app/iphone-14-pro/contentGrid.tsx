"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function ContentGrid() {
    useEffect(() => {
        gsap.fromTo("#iphone14", { opacity: 0, scale: 0.8 }, {
            opacity: 1, scale: 1, duration: 1, scrollTrigger: {
                trigger: "#iphone14",
                scrub: false,
                markers: false,
                start: 'top 90%',
                end: 'top 50%'
            }
        })
        gsap.fromTo("#flowers", { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: "#iphone14",
                scrub: false,
                markers: false,
                start: 'top 90%',
                end: 'top 50%'
            }
        })
        gsap.fromTo("#chip", { bottom: '0px' }, {
            bottom: '-150px', duration: 1.2, scrollTrigger: {
                trigger: "#chip",
                scrub: false,
                markers: false,
                start: 'top 70%',
                end: 'top 30%',
            }
        })
    }, [])
    return (
        <div className="h-auto w-auto bg-gray-300">
            <p className="w-auto pt-[50px] text-center text-3xl mx-auto text-gray-400  font-semibold">iPhone 14 and iPhone 14 Pro Max</p>
            <p className="w-auto pt-4 text-center mx-auto text-xl text-gray-600 font-semibold">From $999 or $41.62/mo. for 24 mo. before trade‑in*</p>
            <p className="p-2 text-white bg-blue-500 rounded-full text-center w-[70px] mt-12 mx-auto">Buy</p>
            <div className="mt-[120px] grid grid-row-3 grid-flow-col h-screen gap-4 mx-[200px]">
                <div className="overflow-hidden row-span-2 bg-black rounded-3xl min-w-[200px] bg-no-repeat bg-bottom relative">
                    <img id='iphone14' src="/apple/iphone14Pro/dynamicisland.jpg" className="absolute bottom-0 left-1/2 transform -translate-x-1/2"></img>
                    <div className="text-purple-500 font-semibold text-center mt-4 h-[120px] w-[200px] text-4xl absolute left-1/2 transform -translate-x-1/2">Meet</div>
                    <div className="text-purple-500 font-semibold text-center mt-14 h-[120px] w-[400px] text-4xl absolute left-1/2 transform -translate-x-1/2">Dynamic Island</div>
                </div>
                <div className="bg-black relative h-auto overflow-hidden w-auto rounded-3xl">
                    <div className="absolute z-20 h-[230px] w-full bottom-0 bg-gradient-to-b from-transparent to-[#000000]"></div>
                    <img id="flowers" src={'/apple/iphone14Pro/flowers.jpg'} className="w-[371px] h-[370px] left-1/2 transform -translate-x-1/2 bottom-0 absolute"></img>
                    <div className="absolute text-white text-2xl font-semibold bottom-0 mb-4 ml-4 z-30">
                        <p>48 MP Main Camera.</p>
                        <p>Mind-Blowing detail.</p>
                    </div>
                    <div className="bg-white rounded-full px-2 py-0 font-black text-2xl absolute bottom-0 mb-4 z-40 right-4">{">"}</div>
                </div>
                <div className="bg-black relative rounded-3xl w-auto h-auto overflow-hidden">
                    <div className="text-4xl ml-10 absolute font-semibold text-white mt-8">
                        <p>The</p>
                        <p>mastermind</p>
                        <p>behind it all.</p>
                    </div>
                    <img id='chip' className="absolute ml-10 z-40" src={'/apple/iphone14Pro/a16.jpg'}></img>
                </div>
            </div>
        </div>
    )
}