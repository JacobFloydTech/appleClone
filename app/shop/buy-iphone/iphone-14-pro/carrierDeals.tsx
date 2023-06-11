"use client";

export default function CarrierDeals() {
    return (
        <div className="w-3/4 mx-auto bg-gray-100 py-4 mt-10 flex justify-center">
            <div className="text-sm">
                <p className="text-black">Special Carrier Deals</p>
                <p className="text-blue-400">See all deals</p>
            </div>
            <img className="w-[30px] h-[30px] ml-12" src={'/apple/shop/logo1.png'}></img>
            <p className="w-[180px] text-sm px-2">Get up to $1000 credit after trade in</p>
            <img className="w-[30px] h-[30px] ml-4" src="/apple/shop/logo2.png"></img>
            <p className="w-[180px] text-sm px-2">Get up to $800 credit after trade‑in.</p>
            <img className="w-[30px] h-[30px] ml-4" src="/apple/shop/logo3.png"></img>
            <p className="w-[180px] text-sm px-2">Get up to $440 credit after trade‑in</p>
        </div>
    )
}