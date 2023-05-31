"use client";

export default function Overview() {
    return (
        <div className="w-auto h-auto flex pt-4 text-white bg-black">
            <p className="ml-[201px] text-2xl font-semibold">iPhone 14 Pro</p>
            <ul className="flex w-auto mx-auto text-sm py-2 pl-40">
                <p className="mx-2 text-gray-400">Overview</p>
                <p className="mx-2">Switch from Android to iPhone</p>
                <p className="mx-2">Tech Specs</p>
                <p className="mx-2 bg-blue-500 flex px-2 rounded-full">Buy</p>
            </ul>
        </div>
    )
}