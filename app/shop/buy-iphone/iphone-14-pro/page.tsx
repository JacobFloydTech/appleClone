'use client';
import Navbar from "app/app/appleNavbar";
import CarrierDeals from "./carrierDeals";
import IntroBuy from "./introBuy";
import IPhoneImage from "./iphoneImage";
import ChooseModel from "./chooseModel";
import InfoGuidePopUp from "./infoGuidePopUp";
import TradeIn from "./tradeIn";
import BoxContents from "./boxContents";
import CompareiPhones from "./compareiPhones";
import Fade from "./fade";
import FrequentlyAskedQuestions from "./frequentlyAskedQuestions";
import Footer from "./footer";


import React, { useEffect } from "react";
import { useState } from "react";
import { gsap } from "gsap";

export const Context = React.createContext<any>(null);



//Remember to use navbar at the end
export default function Page() {
    let [showOptions, setShowOptions] = useState(false);
    let [height, setHeight] = useState(980);

    return (
        <Context.Provider value={{ height, setHeight }}>
            {
                // <Navbar textColor='text-black' background='bg-white' />
            }
            <CarrierDeals />
            <IntroBuy />
            <div className="relative">
                <Fade />
                <div id='grid' className="grid-cols-2 mt-4 grid mx-20">
                    <IPhoneImage />
                    <ChooseModel setShow={setShowOptions} />
                </div>
            </div>
            <TradeIn />
            <BoxContents />
            <CompareiPhones />
            <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
            <Footer></Footer>
            {showOptions && <InfoGuidePopUp setShow={setShowOptions} />}
        </Context.Provider>
    )
}