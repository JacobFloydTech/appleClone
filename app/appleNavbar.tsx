"use client"
import "react";
import { use, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ExpandNavbar from "./appleNabarExpand";


export default function Navbar() { 
    let [hover, setHover] = useState(false);
    let [item, setItem] = useState("");
    let [show, setShow] = useState(true);
    
    let ref = useRef<any>();
    return ( 
        <div className="z-4">
        <div className='bg-gray-500 h-[50px]'>
            <ul className='flex pt-[12px] w-auto justify-center text-neutral-100 text-sm'>
                <img className='flex w-[19.6px] h-[24px]' src="/Apple_logo_black.png"/>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("Store")}}  className='px-5'>Store</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("Mac")}}  className='px-5'>Mac</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("iPad")}}  className='px-5'>iPad</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("iPhone")}}  className='px-5'>iPhone</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("Watch")}}  className='px-5'>Watch</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("Airpods")}}  className='px-5'>Airpods</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("TV")}}  className='px-5'>Tv & Home</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("Entertainment")}}  className='px-5'>Entertainment</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("Accessories")}}  className='px-5'>Accessories</p>
                <p onMouseEnter={() => {setHover(true);setShow(true);setItem("Support")}}  className='px-5'>Support</p>
            </ul>
            {hover && 
                <ExpandNavbar hover={hover} setHover={setHover} prop={item}/>
            }
            
        </div>
        </div>

    )
}