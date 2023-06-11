"use client";

export default function CompareiPhones() {
    return (
        <div>
            <p className="text-3xl font-semibold text-center mt-8 mb-4">Which iPhone is right for you?</p>
            <div className="grid grid-cols-4 mx-40 gap-4 place-items-center">
                <img className="w-48 border-black border-2" src="/apple/shop/gridiphone14pro.jpeg"></img>
                <img className="w-48 border-black border-2" src="/apple/shop/gridiphone14.jpeg"></img>
                <img className="w-48 border-black border-2" src="/apple/shop/gridiphone13.jpeg"></img>
                <img className="w-48 border-black border-2" src="/apple/shop/gripiphonese.jpeg"></img>
                <div className="flex w-full h-auto items-center justify-center border-black border-2 mx-auto">
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                </div>
                <div className="flex w-full h-auto items-center justify-center border-black border-2 mx-auto">
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                </div>
                <div className="flex w-full h-auto items-center justify-center border-black border-2 mx-auto">
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                </div>
                <div className="flex w-full h-auto items-center justify-center border-black border-2 mx-auto">
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                    <div className="rounded-full w-4 h-4 bg-gray-500 mr-2"></div>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-semibold mb-4">iPhone 14 Pro</p>
                    <p className="mb-12">The Ultimate iPhone</p>
                    <p className="text-sm mb-4">From $999</p>
                    <div className="w-full h-[1px] bg-gray-400" />
                </div>
                <div className="text-center">
                    <p className="text-2xl font-semibold mb-4">iPhone 14 </p>
                    <p className="mb-12">A Total Powerhouse</p>
                    <p className="text-sm mb-4">From $799</p>
                    <div className="w-full h-[1px] bg-gray-400" />
                </div>
                <div className="text-center">
                    <p className="text-2xl font-semibold mb-4">iPhone 13</p>
                    <p className="mb-12">As Amazing as Ever. </p>
                    <p className="text-sm mb-4">From $599</p>
                    <div className="w-full h-[1px] bg-gray-400" />
                </div>
                <div className="text-center">
                    <p className="text-2xl font-semibold mb-4">iPhone SE</p>
                    <p className="mb-12">Serious Power. Serious value.</p>
                    <p className="text-sm mb-4">From $429</p>
                    <div className="w-full h-[1px] bg-gray-400" />
                </div>

            </div>
        </div>
    )
}