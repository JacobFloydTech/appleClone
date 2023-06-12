"use client";
import { gsap } from "gsap";
import { useContext, useState } from "react";
import { Context } from "./page";

export default function ChooseModel(props: any) {
    let [hover, setHover] = useState(false);
    let [currentlySelected, setCurrentlySelected] = useState("");
    let [color, setColor] = useState({ current: "", clicked: false });
    let [selectedModel, setSelectedModel] = useState(false);
    let [storage, setStorage] = useState({ storage: "", clicked: false });
    let { top, setTop } = useContext(Context);

    //bg-gradient-to-b from-transparent to-[#FFFFFF]

    return (
        <div className="w-auto ml-48 px-10 h-auto overflow-hidden relative">
            <div className="text-lg flex font-semibold mt-12 mb-4">
                <p className="pr-2">Model.</p>
                <p className="text-gray-400">Which is the best for you?</p>
            </div>
            <div>
                <div id='pro' onClick={() => { setCurrentlySelected("pro"); if (!selectedModel) { setTop((top: number) => top + 200); setSelectedModel(true); } }} className={"rounded-xl flex py-1 px-2 " + (currentlySelected == "pro" ? " border-blue-400 border-2" : " border-gray-400 border-2")}>
                    <div className="my-auto block">
                        <p className="font-semibold">iPhone 14 Pro</p>
                        <p>6.1-inch display</p>
                    </div>
                    <div className="ml-auto text-[12px] float-right text-right">
                        <p>From $999</p>
                        <p>or $41.62/mo.per month</p>
                        <p>for 24 months before</p>
                        <p>trade‑in</p>
                    </div>
                </div>
                <div id='max' onClick={() => { setCurrentlySelected("max"); if (!selectedModel) { setTop((top: number) => top + 200); setSelectedModel(true) } }} className={"rounded-xl flex py-1 px-2 mt-4 " + ((currentlySelected == "max" ? " border-blue-400 border-2" : " border-gray-400 border-2"))}>
                    <div className="my-auto block">
                        <p className="font-semibold">iPhone 14 Pro Max</p>
                        <p>6.7-inch display</p>
                    </div>
                    <div className="ml-auto text-[12px] float-right text-right">
                        <p>From $1099</p>
                        <p>or $45.79/mo.per month</p>
                        <p>for 24 months before</p>
                        <p>trade‑in</p>
                    </div>
                </div>
                <div onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} onClick={() => { props.setShow(true) }} className="bg-gray-400 py-1 px-2 mt-4 rounded-xl flex">
                    <div>
                        <p className="font-semibold">Need help choosing a model?</p>
                        <p>Explore the differences in screen size and battery life.</p>
                    </div>
                    <svg viewBox="" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle cx='10' cy='10' stroke='black' r='7' fill={(hover ? "black" : "white")} strokeWidth='1'></circle>
                        <line x1="5" y1='10' x2='15' y2="10" stroke={(hover ? "white" : "black")}></line>
                        <line x1="10" y1='5' x2='10' y2="15" stroke={(hover ? "white" : "black")}></line>
                    </svg>
                </div>
                <div className="mt-12">
                    <div className="flex text-2xl font-semibold">
                        <p className="text-black">Finish.</p>
                        <p className="text-gray-300">Pick your favourite</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-black mt-4">Color {color?.current}</p>
                        <div className="flex mx-auto">
                            <div onMouseOver={() => { setColor({ ...color, current: "purple" }); }} onMouseLeave={() => { setColor({ ...color, current: "" }); }} onClick={() => { if (!color.clicked) { setColor({ ...color, clicked: true }); setTop((top: number) => top + 800); } }} className="rounded-full bg-purple-500 w-12 h-12"></div>
                            <div onMouseOver={() => { setColor({ ...color, current: "gray" }); }} onMouseLeave={() => { setColor({ ...color, current: "" }); }} onClick={() => { if (!color.clicked) { setColor({ ...color, clicked: true }); setTop((top: number) => top + 800); } }} className="rounded-full mx-4 bg-gray-500 w-12 h-12"></div>
                            <div onMouseOver={() => { setColor({ ...color, current: "gold" }); }} onMouseLeave={() => { setColor({ ...color, current: "" }); }} onClick={() => { if (!color.clicked) { setColor({ ...color, clicked: true }); setTop((top: number) => top + 800); } }} className="rounded-full  bg-yellow-500 w-12 h-12"></div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <p className="text-3xl font-semibold">Storage. How much space do you need?</p>
                        <div onClick={() => { if (!storage.clicked) { setTop(0); }; setStorage({ storage: "128GB", clicked: true }) }} className={" border-2 rounded-xl flex mt-4 p-2" + (storage.storage == "128GB" ? " border-blue-500" : " border-gray-400")}>
                            <p className="font-semibold text-2xl my-auto">128GB</p>
                            <div className="ml-auto text-right">
                                <p>From $1099</p>
                                <p>or $45.79 per month</p>
                                <p>for 24 mo. before</p>
                                <p>trade‑in</p>
                            </div>
                        </div>
                        <div onClick={() => { if (!storage.clicked) { setTop(0); }; setStorage({ storage: "256GB", clicked: true }) }} className={" border-2 rounded-xl flex mt-4 p-2" + (storage.storage == "256GB" ? " border-blue-500" : " border-gray-400")}>
                            <p className="font-semibold text-2xl my-auto">256GB</p>
                            <div className="ml-auto text-right">
                                <p>From $1599</p>
                                <p>or $66.62 per month</p>
                                <p>for 24 mo. before</p>
                                <p>trade‑in</p>
                            </div>
                        </div>
                        <div onClick={() => { if (!storage.clicked) { setTop(0); }; setStorage({ storage: "512GB", clicked: true }) }} className={" border-2 rounded-xl flex mt-4 p-2" + (storage.storage == "512GB" ? " border-blue-500" : " border-gray-400")}>
                            <p className="font-semibold text-2xl my-auto">512GB</p>

                            <div className="ml-auto text-right">
                                <p>From $1399</p>
                                <p>or $58.29 per month</p>
                                <p>for 24 mo. before</p>
                                <p>trade‑in</p>
                            </div>
                        </div>
                        <div onClick={() => { if (!storage.clicked) { setTop(0); }; setStorage({ storage: "1TB", clicked: true }) }} className={" border-2 rounded-xl flex mt-4 p-2" + (storage.storage == "1TB" ? " border-blue-500" : " border-gray-400")}>
                            <p className="font-semibold text-2xl my-auto">1TB</p>
                            <div className="ml-auto text-right">
                                <p>From $1599</p>
                                <p>or $66.62 per month</p>
                                <p>for 24 mo. before</p>
                                <p>trade‑in</p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-max h-24 rounded-xl my-4 overflow-hidden" id="storageinfo">
                        <div className="relative">
                            <img src={'/apple/shop/storageinfo.jpeg'} className="absolute h-24  -left-10"></img>
                        </div>
                        <div className="z-30 h-auto bg-gray-400 absolute ml-24 w-[230px]">
                            <p className="font-semibold">Not sure how much storage to get?</p>
                            <p>Get a better understanding of how much space you'll need</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}