"use client";

export default function CompareiPhones() {
    return (
        <div>
            <p className="text-3xl font-semibold text-center mt-8 mb-4">Which iPhone is right for you?</p>
            <div className="grid grid-cols-4 mx-40 gap-4">
                <img className="mx-auto w-48 border-black border-2" src="/apple/shop/gridicons/gridiphone14pro.jpeg"></img>
                <img className="mx-auto w-48 border-black border-2" src="/apple/shop/gridicons/gridiphone14.jpeg"></img>
                <img className="mx-auto w-48 border-black border-2" src="/apple/shop/gridicons/gridiphone13.jpeg"></img>
                <img className="mx-auto w-48 border-black border-2" src="/apple/shop/gridicons/gripiphonese.jpeg"></img>
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
                <div className="text-center">
                    <p className="font-semibold text-xl">6.7" or 6.1"</p>
                    <p className="text-sm mt-2">Super Retina XDR displayfootnote¹</p>
                    <p className="text-sm mt-1">ProMotion technology</p>
                    <p className="text-sm mt-1">Always-On display</p>
                </div>
                <div className="text-center align-top">
                    <p className="font-semibold text-xl">6.7" or 6.1"</p>
                    <p className="text-sm mt-2">Super Retina Display</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold">6.1″ or 5.4″</p>
                    <p className="text-sm">Super Retina XDR displayfootnote¹</p>
                </div>
                <div className="text-center">
                    <p className="font-semibold text-xl">4.7"</p>
                    <p className="text-sm">Retina HD Display</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/compareiphoneicon.jpeg'} className="w-12 mx-auto"></img>
                    <p className="text-sm">Dynamic island <br></br>A new way to interact <br></br>with iPhone</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="h-[2px] w-[20px] bg-gray-400"></div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="h-[2px] w-[20px] bg-gray-400"></div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="h-[2px] w-[20px] bg-gray-400"></div>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/sosicon.jpeg'} className="w-12 mx-auto"></img>
                    <p className="text-sm">Emergency SOS via satellite<br></br>
                        Emergency SOS<br></br>
                        Crash Detection</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/sosicon.jpeg'} className="w-12 mx-auto"></img>
                    <p className="text-sm">Emergency SOS via satellite<br></br>
                        Emergency SOS<br></br>
                        Crash Detection</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <img src={'/apple/shop/gridicons/sosicon.jpeg'} className="w-12"></img>
                    <div className="h-[2px] w-[20px] bg-gray-400 my-1"></div>
                    <p>Emergency SOS</p>
                    <div className="h-[2px] w-[20px] bg-gray-400 mt-1"></div>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <img src={'/apple/shop/gridicons/sosicon.jpeg'} className="w-12"></img>
                    <div className="h-[2px] w-[20px] bg-gray-400 my-1"></div>
                    <p>Emergency SOS</p>
                    <div className="h-[2px] w-[20px] bg-gray-400 mt-1"></div>
                </div>
                <div className="flex items-center justify-center flex-col text-center">
                    <img src={'/apple/shop/gridicons/fancycamera.jpeg'} className="w-12"></img>
                    <p>Pro camera system</p>
                    <p className="text-gray-400 text-sm">48MP Main | Ultra Wide <br></br>
                        Telephoto<br></br>
                        Photonic Engine for incredible <br></br>detail and color<br></br>
                        Autofocus on TrueDepth front camera</p>
                </div>
                <div className="flex items-center justify-center flex-col text-center">
                    <img src={'/apple/shop/gridicons/fancycamera.jpeg'} className="w-12"></img>
                    <p>Advanced camera system</p>
                    <div className="text-gray-400 text-sm">48MP Main | Ultra Wide <br></br>
                        <div className="h-[2px] w-[20px] bg-gray-400 my-1 mx-auto"></div>
                        Photonic Engine for incredible <br></br>detail and color<br></br>
                        Autofocus on TrueDepth front camera</div>
                </div>
                <div className="flex items-center justify-center flex-col text-center">
                    <img src={'/apple/shop/gridicons/fancycamera.jpeg'} className="w-12"></img>
                    <p>Dual-camera camera system</p>
                    <div className="text-gray-400 text-sm">48MP Main | Ultra Wide <br></br>
                        <div className="h-[2px] w-[20px] bg-gray-400 my-4 mx-auto"></div>
                        <div className="h-[2px] w-[20px] bg-gray-400 my-2 mx-auto"></div>
                        TrueDepth front camera</div>
                </div>
                <div className="flex items-center justify-center flex-col text-center">
                    <img src={'/apple/shop/gridicons/camera.jpeg'} className="w-12"></img>
                    <div className="h-[2px] w-[20px] bg-gray-400 mt-2 mb-2 mx-auto"></div>
                    <div className="h-[2px] w-[20px] bg-gray-400 my-2 mx-auto"></div>
                    <div className="h-[2px] w-[20px] bg-gray-400 my-2 mx-auto"></div>
                    <p className="text-gray-400 text-sm">Front Camera</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/smoothingout.jpeg'} className="w-12 mx-auto"></img>
                    <p className="text-base">Action mode smooths out <br></br>shaky handheld videos</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/smoothingout.jpeg'} className="w-12 mx-auto"></img>
                    <p className="text-base">Action mode smooths out <br></br>shaky handheld videos</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="h-[2px] w-1/4 bg-gray-400 rounded-xl "></div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="h-[2px] w-1/4 bg-gray-400 rounded-xl "></div>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/batteryicon.jpeg'} className="w-12 mx-auto"></img>
                    <p>Up to 29 hours of video playback</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/batteryicon.jpeg'} className="w-12 mx-auto"></img>
                    <p>Up to 26 hours of video playback</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/batteryicon.jpeg'} className="w-12 mx-auto"></img>
                    <p>Up to 19 hours of video playback</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/batteryicon.jpeg'} className="w-12 mx-auto"></img>
                    <p>Up to 15 hours of video playback</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/a16icon.jpeg'} className="w-12 mx-auto"></img>
                    <p>A16 Bionic Chip</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/a15icon.jpeg'} className="w-12 mx-auto"></img>
                    <p>A16 Bionic Chip <br></br>with 5-core GPU</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/a15icon.jpeg'} className="w-12 mx-auto"></img>
                    <p>A16 Bionic Chip <br></br>with 4-core GPU</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/a15icon.jpeg'} className="w-12 mx-auto"></img>
                    <p>A16 Bionic Chip <br></br>with 4-core GPU</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/faceid.jpeg'} className="w-12 mx-auto"></img>
                    <p>Face ID</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/faceid.jpeg'} className="w-12 mx-auto"></img>
                    <p>Face ID</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/faceid.jpeg'} className="w-12 mx-auto"></img>
                    <p>Face ID</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/touchid.jpeg'} className="w-12 mx-auto"></img>
                    <p>Touch ID</p>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/5g.jpeg'} className="w-12 mx-auto"></img>
                    <p>Superfast 5G Celluer</p>
                    <div className="h-[2px] w-1/2 bg-gray-400 my-2 mx-auto"></div>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/5g.jpeg'} className="w-12 mx-auto"></img>
                    <p>Superfast 5G Celluer</p>
                    <div className="h-[2px] w-1/2 bg-gray-400 my-2 mx-auto"></div>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/5g.jpeg'} className="w-12 mx-auto"></img>
                    <p>Superfast 5G Celluer</p>
                    <div className="h-[2px] w-1/2 bg-gray-400 my-2 mx-auto"></div>
                </div>
                <div className="text-center">
                    <img src={'/apple/shop/gridicons/5g.jpeg'} className="w-12 mx-auto"></img>
                    <p>5G Celluer</p>
                    <div className="h-[2px] w-1/2 bg-gray-400 my-2 mx-auto"></div>
                </div>

            </div>

        </div>
    )
}