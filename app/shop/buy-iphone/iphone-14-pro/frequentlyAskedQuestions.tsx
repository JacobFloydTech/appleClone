"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";


export default function FrequentlyAskedQuestions() {
    let [expanded, setExpanded] = useState<Array<boolean>>(Array(15).fill(false));
    let [hover, setHover] = useState<Array<boolean>>(Array(15).fill(false));
    let [hide, setHide] = useState(false);

    let questions = [
        { 'What is eSim?': "An eSIM is a digital SIM that eliminates the need for a physicalo SIM card. With eSIM, you can quickly and easily transfer an existing cellular plan or get a new cellular plan, all digitally. You can even store multiple eSIMs on the same device and use two phone numbers at the same time. And it’s more secure - someone can’t remove the physical SIM card if your iPhone is lost or stolen. In just a few simple steps, you are ready to make calls, send messages, and browse the web. Learn more about eSIM." },
        { 'Can I activate an iPhone 14 or iPhone 14 Pro outside of the United States?': "iPhone 14 or iPhone 14 Pro models purchased in the US or Puerto Rico don’t have a physical SIM tray and activate only using eSIM. You can activate your iPhone outside the country if your carrier supports eSIM. Learn more about using eSIM while traveling." },
        {
            'When I buy from apple.com, does my iPhone come ready to use?': " Carrier-connected iPhone SE, iPhone 12, iPhone 13, iPhone 13 mini, iPhone 14 and iPhone 14 Pro models will arrive ready to activate with eSIM and can connect to your cellular voice and data service without a physical SIM card. If you completed the steps to authorize activation with AT & T, T- Mobile, or Verizon when you purchased your new iPhone online, it will arrive ready to use.Just turn it on and follow the onscreen instructions to set it up and activate with the carrier.To activate with eSIM, you will need Wi - Fi for setup. If you choose \"Connect to a carrier later\" when you buy your iPhone, you can activate with your service when you receive your device.If you're asked to transfer your SIM, follow the onscreen instructions to transfer service from your previous iPhone. To learn more, visit https://support.apple.com/kb/HT212780."
        }, {
            "Will my new iPhone be unlocked?": "Yes. An iPhone purchased from apple.com is unlocked. Once your new iPhone is activated, it remains unlocked, which means you can use it with any network that provides service for iPhone. The exception is when you buy an iPhone with an AT&T Installment Plan. It will be locked to AT&T and will only work on the AT&T network for the term of your Installment Plan agreement."
        }, {
            "Why is Sprint no longer a carrier option when I purchase an iPhone through Apple?": "Sprint is now part of T-Mobile. Sprint customers will need to purchase an unconnected iPhone and contact T-Mobile after receiving the device to activate it. If you plan to finance the iPhone, contact T-Mobile prior to purchasing."
        }, {
            "Where can Sprint customers get support?": "Sprint customers can call T-Mobile Care or visit select T-Mobile store locations that service Sprint accounts. Find out which store locations offer support on the T-Mobile website."
        }, {
            "Are there differences between an iPhone for AT&T, T-Mobile, or Verizon?": " The iPhone models for AT&T, T-Mobile, and Verizon are the same. If you choose to pay with an AT&T Installment Plan, your iPhone will be locked to the carrier. For details on network support, please see support.apple.com/en-us/HT204039."

        }, {
            "I’m buying an iPhone as a gift. Can it be activated at a later date?": " In most cases, an iPhone purchased from apple.com can be activated later. However, certain special deals or discounts may require preparation with the carrier at the time of purchase so that the phone arrives ready to use."

        }, {
            "Is it easy to transfer my data and set up my new iPhone": `
            

Yes, iCloud makes moving your settings, photos, apps and documents to a new device seamless. Just sign in to iCloud when you set up your new device, access your previous device’s iCloud backup and you’ll be ready to go in minutes.

Don’t have enough iCloud storage to complete a backup? iCloud will grant you enough temporary storage to make sure you can back up your device and get all your data transferred, free of charge (iOS 15 required).

With Quick Start, you can restore your data and content to your new iPhone from your iCloud backup. For phones using iOS 12.4 or later, Quick Start offers the option of using device-to-device migration, allowing you to transfer all your data wirelessly from your current device to your new one.

If you are switching from Android, you need to download the Move to iOS app first and follow the setup process on your new iPhone.

To learn how to transfer data to your new iPhone, see support.apple.com/en-us/HT201269.
            `

        }, {
            "Will my iPhone work worldwide?": `All iPhone models are world phones, so you can use them almost anywhere. Whether you are a GSM or CDMA network customer, you can roam internationally on GSM networks in over 200 countries or regions around the world. If you financed your iPhone with your wireless carrier, contact them to verify that you can roam internationally.

Availability of 5G and LTE data varies in some countries or regions and depends on carrier support for certain 5G and LTE radio frequencies. Contact your wireless carrier for more information regarding international roaming policies and rates.

Information on iPhone support for 5G and LTE`
        }, {
            "Which network providers offer 5G service?":
                `
AT&T, T-Mobile, and Verizon are the national wireless carriers for iPhone in the United States, and they all offer 5G service. iPhone SE, iPhone 12, iPhone 13, iPhone 13 mini, iPhone 14, iPhone 14 Plus, iPhone 14 Pro, iPhone 14 Pro Max are 5G capable. The Apple Store and apple.com sell these models for use on these networks.

View the AT&T 5G coverage map

View the T‑Mobile 5G coverage map

View the Verizon 5G coverage map`
        }, {
            "How can I pay using Apple Card Monthly Installments?": `If you already have Apple Card and want to purchase your iPhone with Apple Card Monthly Installments, select it as your payment option during checkout. You’ll receive 3% Daily Cash back up front and pay for your new device over time, interest-free◊ when you choose to check out with Apple Card Monthly Installments. If you don’t have Apple Card yet, you can apply for one in as little as a minute when you select Apple Card Monthly Installments as your payment option and use it for your purchase.

Learn more about Apple Card Monthly Installments 

If you used your Apple Card to pay in full, but you meant to take advantage of interest-free financing using Apple Card Monthly Installments, we can help you get switched over. Contact an Apple Card Specialist at 877-255-5923. You can also chat with one by tapping on Apple Card in Wallet, tapping on the black circle in the upper right-hand corner, and then tapping Message.

Customers in U.S. Territories should contact Goldman Sachs Bank USA for questions about installments.`
        }, {
            "How does the iPhone Upgrade Program work?": `The iPhone Upgrade Program is the easiest way to upgrade to the latest iPhone, and it also offers the security and protection of AppleCare+.

If you are new to the iPhone Upgrade Program, you can learn more about joining here .

If you are already part of the program, start by checking your upgrade status to see if you’re eligible for a new iPhone. If you are, you can either proceed with your upgrade online or visit an Apple Store and chat with a Specialist. You can upgrade anytime after six months, as long as you’ve made the equivalent of at least 12 payments. If you have to pay an additional amount to meet your 12 payments, you can do it when you upgrade. We will arrange for you to trade in your old iPhone as part of the program, so please do not trade in your current iPhone using the standard Apple Trade In option.

Check your upgrade eligibility now 
Learn more about upgrading `
        }, {
            "What are my delivery options, and when will I get my items?":
                `
Delivery estimates are based on item availability and the shipping option you choose. You’ll get a final delivery date after you place your order.

Free next-day delivery is available for any in-stock Mac, iPad, iPhone, Apple TV, or Apple Watch. Get free two-day delivery on almost everything else. Or you can upgrade your shipping method for an additional charge.

In most metros, we offer same-day scheduled courier delivery on available in-stock items from an Apple Store. The two-hour delivery fee is $9. You’ll choose a delivery date and time during checkout. Subject to availability.

Depending on your location, your order may be eligible for In-Store, Curbside or Express Pickup at or near the Apple Store. For pickup, you’ll choose a pickup method, date, and store during checkout.

Orders placed through apple.com can only be shipped within the country or region of purchase. Visit the online store of the location where you want your products delivered.`
        }, {
            "Can I return my iPhone?": `
Yes. If you change your mind and no longer wish to keep your iPhone, you have the option to return it to us. The returned iPhone must be in good condition and in the original packaging, which contains all accessories, manuals and instructions. Returns are subject to Apple’s Sales and Refunds Policy.

Learn more about returns, refunds and exchanges `
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