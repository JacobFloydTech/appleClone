"use client";

import { useState } from "react";

export default function Phone(props) { 
    let [learn, setLearn] = useState(false)
    let [buy, setBuy] = useState(false);


    return (
        <div className="relative">
            <div className="h-[45px] bg-black"></div>
            <div style={{overflow: 'hidden', background: "url('/apple/hero-iphone-14.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionX: '-740px', height: "624px", width: "100%"}}>
                <p className="text-6xl mb-2 text-white mx-auto w-auto text-center font-semibold z-10">iPhone 14 Pro</p>
                <p className="text-4xl text-white mb-2 mx-auto w-auto text-center z-10">Pro. Beyond.</p>
                <div className="text-blue-500 text-2xl align-center justify-center mx-auto w-[400px] text-center flex z-10">
                    <p onMouseOver={() => setLearn(true)} onMouseLeave={() => setLearn(false)} className={"text-center mr-2 flex" + (learn ? " underline": null)}>Learn more</p> 
                    <p className="mr-10">{">"}</p>
                    <p onMouseOver={() => {setBuy(true)}} onMouseLeave={() => setBuy(false)} className={"mr-2 text-center flex" + (buy ? " underline": null)}>Buy</p>
                    <p>{">"}</p>
                </div>
            </div>
            <div className="h-[10px] bg-white"></div>
            <div style={{overflow: 'hidden', background: "url('/apple/hero-iphone-14-2.jpg')", backgroundPositionX: '-740px', height: '624px', width: '100%'}}>
            <p className="text-6xl mb-2 mt-12 text-black mx-auto w-auto text-center font-semibold z-10">iPhone 14 Pro</p>
                <p className="text-4xl text-black mb-2 mx-auto w-auto text-center z-10">Wonderfull.</p>
                <div className="text-blue-500 text-2xl align-center justify-center mx-auto w-[400px] text-center flex z-10">
                    <p onMouseOver={() => setLearn(true)} onMouseLeave={() => setLearn(false)} className={"text-center mr-2 flex" + (learn ? " underline": null)}>Learn more</p> 
                    <p className="mr-10">{">"}</p>
                    <p onMouseOver={() => {setBuy(true)}} onMouseLeave={() => setBuy(false)} className={"mr-2 text-center flex" + (buy ? " underline": null)}>Buy</p>
                    <p>{">"}</p>
                </div>
            </div>
        </div>
    )
}