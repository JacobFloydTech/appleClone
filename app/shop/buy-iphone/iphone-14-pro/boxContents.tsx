"use client";

export default function BoxContents() {
    return (
        <div className="items-center justify-center mx-40">
            <p className="text-3xl font-semibold text-center mb-2">What's in the Box</p>
            <div className="bg-gray-100 flex items-center justify-center pt-20">
                <div className="flex w-1/2">
                    <img src={'/apple/shop/boxiphone.jpeg'} className="mr-auto"></img>
                    <img src={'/apple/shop/boxcable.jpeg'} className=" ml-auto"></img>
                </div>
            </div>
            <div className="flex w-auto mt-4">
                <p className="ml-[300px] ">iPhone 14 Pro</p>
                <p className="ml-[250px]">USB-C to Lightning Cable</p>
            </div>
            <div className="w-auto text-center">
                <p className="font-semibold text-gray-500 mb-4">Our environmental goals</p>
                <p className="text-[12px] mb-4">As part of our efforts to reach carbon neutrality by 2030, iPhone 14 Pro and iPhone 14 Pro Max do not include a power adapter or EarPods. Included in the box <br></br> is a USB‑C to Lightning Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.</p>
                <p className="text-[12px]">We encourage you to re‑use your current USB‑A to Lightning cables, power adapters, and headphones, which are compatible with these iPhone models. <br></br> But if you need any new Apple power adapters or headphones, they are available for purchase.</p>
            </div>
        </div>
    )
}

