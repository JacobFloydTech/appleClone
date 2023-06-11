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
import { useState } from "react";

//Remember to use navbar at the end
export default function Page() {
    let [showOptions, setShowOptions] = useState(false);

    return (
        <div>
            {
                // <Navbar textColor='text-black' background='bg-white' />
            }
            <CarrierDeals />
            <IntroBuy />
            <div id='grid' className="grid-cols-2 mt-4 grid mx-20">
                <IPhoneImage />
                <ChooseModel setShow={setShowOptions} />
            </div>
            <TradeIn />
            <BoxContents />
            <CompareiPhones />
            {showOptions && <InfoGuidePopUp setShow={setShowOptions} />}
        </div>
    )
}