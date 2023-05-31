"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function ContentGrid() {
    let [video, setVideo] = useState("firstphoto")
    useEffect(() => {
        gsap.fromTo("#iphone14", { opacity: 0, scale: 0.8 }, {
            opacity: 1, scale: 1, duration: 1, scrollTrigger: {
                trigger: "#iphone14",
                scrub: false,
                markers: false,
                start: 'top 90%',
                end: 'top 50%'
            }
        })
        gsap.fromTo("#flowers", { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: "#iphone14",
                scrub: false,
                markers: false,
                start: 'top 90%',
                end: 'top 50%'
            }
        })
        gsap.fromTo("#chip", { bottom: '0px' }, {
            bottom: '-150px', duration: 1.2, scrollTrigger: {
                trigger: "#chip",
                scrub: false,
                markers: false,
                start: 'top 70%',
                end: 'top 30%',
            }
        })
        gsap.to("#allin", {
            backgroundPositionX: 0, duration: 5, scrollTrigger: {
                trigger: "#allin",
                markers: false,
                scrub: false,
            }
        })
        gsap.to("#allday", {
            backgroundPositionX: 0, duration: 5, delay: 1, scrollTrigger: {
                trigger: "#allin"
            }
        })
        let el = document.querySelector(".basketball");
        function handle(e: object[]) {
            e.map((element: object) => {
                if (element.isIntersecting) {
                    setVideo("video")
                }
            });
        }
        gsap.fromTo("#cermanic", { opacity: 0, x: 10, scale: 0.95, y: 20 }, {
            opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: {
                trigger: "#cermanic",
                start: "top 90%",
                end: "top 30%",
                scrub: false,
                markers: false,
            }
        })
        gsap.fromTo("#sostext", { opacity: 0 }, {
            opacity: 1, duration: 1, scrollTrigger: {
                trigger: "#sostext",
                start: "top 50%",
                end: 'top 10%',
                scrub: false,
                markers: true
            }
        })
        gsap.fromTo("#alwayson", { opacity: 0, scale: 0.95, y: 20 }, {
            opacity: 1, scale: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: "#alwayson",
                start: 'top 60%',
                end: 'top 10%',
                scrub: false,

            }
        })
        let options = {
            threshold: 0.5
        }
        const ob = new IntersectionObserver(handle, options)
        ob.observe(el)
        document.getElementById("basketballvideo")?.addEventListener("ended", () => {
            setVideo("lastphoto")
        })

    }, [])
    return (
        <div className="h-auto w-auto bg-gray-300">
            <p className="w-auto pt-[50px] text-center text-3xl mx-auto text-gray-400  font-semibold">iPhone 14 and iPhone 14 Pro Max</p>
            <p className="w-auto pt-4 text-center mx-auto text-xl text-gray-600 font-semibold">From $999 or $41.62/mo. for 24 mo. before trade‑in*</p>
            <p className="p-2 text-white bg-blue-500 rounded-full text-center w-[70px] mt-12 mx-auto">Buy</p>
            <div className="h-[5000px]" id='grid'>
                <div className="mt-[120px] grid grid-cols-3 w-[950px] gap-4 mx-auto content-center justify-center ">
                    <div className="overflow-hidden col-span-2 row-span-2 bg-black rounded-3xl h-auto w-auto relative">
                        <div className="text-purple-500 font-semibold text-center mt-4 text-4xl ">Meet</div>
                        <div className="text-purple-500 font-semibold text-center mt-2 mb-4 text-4xl">Dynamic Island</div>
                        <img id='iphone14' src="/apple/iphone14Pro/dynamicisland.jpg" className="flex self-end mx-auto"></img>

                    </div>
                    <div className="bg-black relative h-auto overflow-hidden w-auto row-span-1 col-start-3 rounded-3xl">
                        <div className="absolute z-20 h-[300px] w-full bottom-0 bg-gradient-to-b from-transparent to-[#000000]"></div>
                        <img id="flowers" src={'/apple/iphone14Pro/flowers.jpg'} className="w-[371px] h-[370px] left-1/2 transform -translate-x-1/2 bottom-0 absolute"></img>
                        <div className="absolute text-white text-2xl font-semibold bottom-0 mb-4 ml-4 z-30">
                            <p>48 MP Main Camera.</p>
                            <p>Mind-Blowing detail.</p>
                        </div>
                        <div className="bg-white rounded-full px-2 py-0 font-black text-2xl absolute bottom-0 mb-4 z-40 right-2">{">"}</div>
                    </div>
                    <div className="bg-black relative rounded-3xl w-auto h-auto overflow-hidden row-span-1 col-start-3">
                        <div className="text-4xl ml-10 absolute font-semibold text-white mt-8">
                            <p>The</p>
                            <p>mastermind</p>
                            <p>behind it all.</p>
                        </div>
                        <img id='chip' className="absolute ml-10 z-40" src={'/apple/iphone14Pro/a16.jpg'}></img>
                    </div>
                    <div className="bg-black rounded-xl w-auto h-auto overflow-hidden row-span-1 col-span-2 col-start-1 relative">Hello there
                        <div className="text-5xl font-semibold ml-20 absolute h-auto top-1/2 transform -translate-y-1/2">
                            <p className="battery_gradient p-2">A battery that's</p>
                            <p id='allin' className="text-6xl mt-2 ml-8 battery_gradient p-2" style={{ backgroundPositionX: '1000%' }}>All in</p>
                            <p id='allday' className="text-6xl mt-2 ml-12 p-2 battery_gradient" style={{ backgroundPositionX: '1000%' }} >All day.</p>
                        </div>
                    </div>
                    <div className="bg-black rounded-xl w-auto h-auto overflow-hidden row-span-1 col-span-1 col-start-3">
                        <video muted autoPlay loop className="flex mx-auto object-cover">
                            <source src={'/apple/iphone14Pro/filmlikeapro.mp4'}></source>
                        </video>
                    </div>
                    <div className="rounded-xl w-auto h-auto overflow-hidden row-span-2 col-span-1 col-start-1 basketball relative">
                        {video == 'firstphoto' &&
                            <img src={'/apple/iphone14Pro/basketballfirst.jpg'}></img>}
                        {video == 'video' &&
                            <video id='basketballvideo' autoPlay muted>
                                <source src={'/apple/iphone14Pro/basketballvideo.mp4'} />
                            </video>}
                        {video == 'photolast' &&
                            <img src={'/apple/iphone14Pro/basketballlast.jpg'}></img>
                        }
                        <div className="absolute text-blue-300 font-semibold z-40 top-0 left-1/2 transform -translate-x-1/2 w-full text-center mt-4">
                            <p className="text-2xl">Action Mode</p>
                            <p className="text-4xl">Shaky Shots,</p>
                            <p className="text-3xl">stable video</p>
                        </div>
                    </div>
                    <div className="w-auto relative h-auto overflow-hidden row-span-2 col-span-2 col-start-2 bg-black">
                        <div className="text-center w-auto font-semibold text-4xl text-purple-500 mt-10">
                            <p>Always-On Display</p>
                            <p>A subtle way to stay</p>
                            <p>In the know.</p>
                        </div>
                        <img id='alwayson' className="w-[210px] h-auto absolute bottom-0 left-1/2 transform -translate-x-1/2" src={'/apple/iphone14Pro/alwaysondeeppurple.jpg'}></img>
                    </div>
                    <div className="w-auto h-auto row-span-2 col-span-2 bg-black col-start-1 rounded-2xl relative">
                        <div className="text-white font-semibold text-center mt-12">
                            <p className="text-2xl text-white mb-4">Cermanic Shield</p>
                            <div className="text-4xl cermanic_gradient">
                                <p>Tougher than any</p>
                                <p>smartphone glass</p>
                            </div>
                        </div>
                        <img id='cermanic' src='/apple/iphone14Pro/cermanicstrength.jpg' className="w-[355px] mx-auto mt-12"></img>
                    </div>
                    <div className="w-auto h-auto row-span-1 col-span-1 col-start-3 relative">
                        <img src='/apple/iphone14Pro/waterresistance.jpg' className="rounded-2xl"></img>
                        <p className="absolute left-1/2 transform -translate-x-1/2 top-[180px] text-white font-semibold text-2xl">(Phew)</p>
                    </div>
                    <div className="w-auto h-auto row-span-1 col-span-1 col-start-3 relative">
                        <video className="rounded-xl" muted autoPlay>
                            <source src={'/apple/iphone14Pro/SOS.mp4'} />
                        </video>
                        <p id='sostext' className="text-white text-3xl top-2 text-center left-1/2 transform -translate-x-1/2 w-[250px] font-semibold absolute">Emergency SOS via satellite</p>
                    </div>
                    <div className="w-auto h-auto row-span-1 col-span-1 col-start-1 rounded-2xl overflow-hidden">
                        <img src={'/apple/iphone14Pro/crashdetection.jpg'}></img>
                    </div>
                    <div className="w-auto h-auto col-span-2 col-start-2 rounded-2xl overflow-hidden bg-black flex justify-center">
                        <div className="w-[200px] relative mr-20">
                            <p className="text-4xl text-center font-semibold text-white mt-4">6.7"</p>
                            <p className="text-xl text-center font-semibold text-white mt-2">iPhone 14 Pro Max</p>
                            <img className="w-[200px] -bottom-2 absolute" src={'/apple/iphone14Pro/iphonesize.jpg'}></img>
                        </div>
                        <div className="w-[210px] relative">
                            <p className="text-4xl text-center font-semibold text-white mt-12">6.1"</p>
                            <p className="text-xl text-center font-semibold text-white mt-2">iPhone 14 Pro </p>
                            <img className="w-[160px] -bottom-2 absolute left-1/2 transform -translate-x-1/2" src={'/apple/iphone14Pro/iphonesize.jpg'}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}