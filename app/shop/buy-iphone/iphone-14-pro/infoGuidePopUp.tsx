"use client";

import { useEffect, useState } from "react";

export default function InfoGuidePopUp(props: any) {

    return (
        <div id='popup' className='w-full h-[1000px] backdrop-blur-lg absolute top-0 z-40'>
            <div className="bg-white rounded-2xl mx-auto w-3/5 h-auto flex-col border-black border-2 overflow-hidden mt-16">
                <div className="px-12">
                    <div onClick={() => { props.setShow(false) }} className="py-2">
                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy='20' r='15' fill='#ACAAA7'></circle>
                            <line x1='15' y1='23' x2='25' y2='15' stroke='black' stroke-width="2"></line>
                            <line x1='15' y1='15' x2='25' y2='23' stroke='black' stroke-width='2'></line>
                        </svg>
                    </div>
                    <p className="w-full text-center text-3xl">Which model is right for you?</p>
                    <div className="mx-auto mt-12 items-end flex w-auto">
                        <div>
                            <img className=" w-[250px] mr-60" src={'/apple/shop/optioniphone.jpeg'}></img>
                            <p className="text-center mt-2  w-[250px] font-semibold">iPhone 14 Pro</p>
                        </div>
                        <div>
                            <img className="w-[250px]" src={'/apple/shop/optioniphone2.jpeg'}></img>
                            <p className="text-center mt-2 w-[250px] font-semibold">iPhone 14 Pro Max</p>
                        </div>
                    </div>
                    <p className="mt-4">iPhone 14 Pro and iPhone 14 Pro Max share the same powerful innovations, like the all‑new Dynamic Island, Always-On display, groundbreaking safety features,³ 48MP Main camera, A16 Bionic — the ultimate smartphone chip — and more.</p>
                    <p className="text-2xl font-semibold mt-4">Here are the key differences:</p>
                    <p className="mt-4">iPhone 14 Pro has a 6.1-inch display,¹ and iPhone 14 Pro Max has a 6.7-inch display.¹</p>
                    <p className="mt-4">When it comes to battery life, iPhone 14 Pro gets up to 23 hours of video playback.⁴ iPhone 14 Pro Max gets up to 29 hours of video playback.⁴</p>
                    <p className="my-4">For the full details, check out Tech Specs</p>
                </div>
                <div className="bg-gray-100 w-full h-auto flex-col justify-center pt-4">
                    <img src="/apple/shop/specalisticon.png" className="rounded-full w-12 bg-blue-400 mx-auto"></img>
                    <p className="h-auto w-auto text-center py-1 text-[15px]">Have more questions?</p>
                    <p className="h-auto w-auto text-center pb-1 text-[15px]">Ask a iPhone specialist</p>
                </div>
            </div>
        </div>
    )
}