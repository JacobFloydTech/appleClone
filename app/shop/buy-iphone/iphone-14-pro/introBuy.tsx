"use client";

export default function IntroBuy() {
    return (
        <div className="mx-24">
            <div className="flex mt-12">
                <div>
                    <p className="pb-2 text-orange-400 text-sm">New</p>
                    <p className="pb-2 text-black text-4xl">Buy iPhone 14 Pro</p>
                    <p className="pb-2 text-sm text-black">From $999 or $41.62/mo. for 24 mo. before trade-in</p>
                </div>
                <div className="ml-auto w-1/3">
                    <div className="flex bg-gray-100 rounded-full mb-4 p-4 text-sm float-right">
                        <p>Get $40-$630 for you trade in</p>
                        <p className="ml-2 border-black border-2 rounded-full px-1">+</p>
                    </div>
                    <div className="flex bg-gray-100 rounded-full p-4 text-sm float-right">
                        <p>Get 3% back Daily Cash back with Apple Card</p>
                        <p className="ml-2 border-black border-2 rounded-full px-1">+</p>

                    </div>
                </div>
            </div>
        </div>
    )
}