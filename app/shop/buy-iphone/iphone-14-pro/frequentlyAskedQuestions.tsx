"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";



export default function FrequentlyAskedQuestions() {
    let [expanded, setExpanded] = useState<Array<boolean>>(Array(3).fill(false));
    let [hover, setHover] = useState<Array<boolean>>(Array(3).fill(false));
    let [hide, setHide] = useState(false);

    let questions = [
        { 'What is eSim?': "An eSIM is a digital SIM that eliminates the need for a physicalo SIM card. With eSIM, you can quickly and easily transfer an existing cellular plan or get a new cellular plan, all digitally. You can even store multiple eSIMs on the same device and use two phone numbers at the same time. And it’s more secure - someone can’t remove the physical SIM card if your iPhone is lost or stolen. In just a few simple steps, you are ready to make calls, send messages, and browse the web. Learn more about eSIM." },
        { 'Can I activate an iPhone 14 or iPhone 14 Pro outside of the United States?': "iPhone 14 or iPhone 14 Pro models purchased in the US or Puerto Rico don’t have a physical SIM tray and activate only using eSIM. You can activate your iPhone outside the country if your carrier supports eSIM. Learn more about using eSIM while traveling." },
        {
            'When I buy from apple.com, does my iPhone come ready to use?': " Carrier-connected iPhone SE, iPhone 12, iPhone 13, iPhone 13 mini, iPhone 14 and iPhone 14 Pro models will arrive ready to activate with eSIM and can connect to your cellular voice and data service without a physical SIM card. If you completed the steps to authorize activation with AT & T, T- Mobile, or Verizon when you purchased your new iPhone online, it will arrive ready to use.Just turn it on and follow the onscreen instructions to set it up and activate with the carrier.To activate with eSIM, you will need Wi - Fi for setup. If you choose \"Connect to a carrier later\" when you buy your iPhone, you can activate with your service when you receive your device.If you're asked to transfer your SIM, follow the onscreen instructions to transfer service from your previous iPhone. To learn more, visit https://support.apple.com/kb/HT212780."
        }

    ]


    function handleAnimation(index: number) {
        if (!expanded[index]) {
            gsap.to(document.getElementById(`answer${index}`), { height: 'auto', duration: 0.3, paddingBottom: 10, paddingTop: 10 })
            gsap.fromTo(`#svg${index}`, { rotateX: 0 }, { rotateX: 180, duration: 0.3 })
        } else {
            gsap.to(document.getElementById(`answer${index}`), { height: 0, duration: 0.3, padding: 0 })
            gsap.fromTo(`#svg${index}`, { rotateX: 180 }, { rotateX: 0, duration: 0.3 })
        }

    }
    function editExpand(index: number) {
        handleAnimation(index);
        let newArr = expanded.map((e: boolean, i: number) => {
            if (index == i) {
                return !e;
            } else {
                return e;
            }
        })
        setExpanded(newArr)
    }
    function editHover(index: number) {
        let newArr = hover.map((e: boolean, i: number) => {
            if (index == i) {
                return !e;
            } else {
                return e;
            }
        })
        setHover(newArr);

    }
    function hideMain() {
        if (hide) {
            gsap.to("#main", { height: 'auto', duration: 0.3 })
        } else {
            gsap.to("#main", { height: 0, duration: 0.3 })
        }
        setHide(hide => !hide)
    }

    return (
        <div>
            <div className="h-[1px] w-full bg-gray-400"></div>
            <div onClick={() => hideMain()} className="flex mx-44 mt-6">
                <p className="text-4xl font-semibold">Frequently Asked Questions</p>
                <svg className="ml-auto mr-2" id={`titleSVG`} role="img" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="15" y1="50" x2="30" y2="20" stroke="black"> </line>
                    <line x1="45" y1="50" x2="30" y2="20" stroke="black"> </line>
                </svg>
            </div>
            <div id='main' className="mx-44 overflow-hidden">
                {questions.map((e: Object, index: number) => {
                    return (
                        <div className="my-12" key={index} onClick={() => { editExpand(index) }}>
                            <div className="flex items-center">
                                <p onMouseOver={() => { editHover(index) }} onMouseLeave={() => { editHover(index) }} className={(hover[index] ? "text-blue-400" : "text-black")}>{Object.keys(e)}</p>
                                <svg className="ml-auto mr-4" id={`svg${index}`} role="img" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="30" x2="20" y2="10" stroke="black"> </line>
                                    <line x1="30" y1="30" x2="20" y2="10" stroke="black"> </line>
                                </svg>
                            </div>

                            <div id={`answer${index}`} className="h-0 overflow-hidden">
                                <p>{Object.values(e)}</p>
                            </div>
                            <div className="h-[1px] w-full bg-gray-400"></div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}