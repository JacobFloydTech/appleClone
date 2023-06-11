"use client";

export default function TradeIn() {
    return (
        <div className="mx-20 mt-4 flex">
            <div className="w-[780px]">
                <div className="inline-block align-top text-2xl font-semibold">
                    <p className="text-black">Apple Trade In.</p>
                    <p className="text-gray-300">Get 40-630 credit toward your new iPhone</p>
                </div>
                <div className="grid grid-cols-2 my-6">
                    <div className="border-black border-2 rounded-xl mr-8 text-center p-4">
                        <p className="text-xl">Select a smartphone</p>
                        <p className="text-sm">Answer a few questions to get your estimate.</p>
                    </div>
                    <div className="border-black border-2 rounded-xl text-center p-2 flex items-center justify-center">
                        <p>No trade-in</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-400 flex h-20 w-80 ml-auto my-auto mr-8">
                <div className="w-24">
                    <img className="w-24" src={'/apple/shop/purchasethumbnail.jpeg'}></img>
                </div>
                <div className="text-sm pl-2">
                    <p>How does trade in work?</p>
                    <p>We'll walk you through the step-by-step process</p>
                </div>
            </div>
        </div>
    )
}