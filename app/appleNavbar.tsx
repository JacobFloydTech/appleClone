"use client";
import "react";
import { use, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ExpandNavbar from "./appleNabarExpand";

export default function Navbar(props: any) {
  let [hover, setHover] = useState(false);
  let [item, setItem] = useState("");
  let [AnimateOut, setAnimateOut] = useState(false);

  let ref = useRef<any>();
  return (
    <div className={`${props.background}`}>
      <div className="h-[50px] relative">
        <ul
          onMouseOverCapture={() => { setAnimateOut(true) }}
          className={`flex pt-[12px] w-auto justify-center ${props.textColor} text-sm`}>
          <img
            id="start"
            className="flex w-[19.6px] h-[24px]"
            src="/Apple_logo_black.png"
          />
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setAnimateOut(false);
              setItem("Store");
            }}
            className="px-5">
            Store
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setAnimateOut(false);
              setItem("Mac");
            }}
            className="px-5">
            Mac
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setAnimateOut(false);
              setItem("iPad");
            }}
            className="px-5">
            iPad
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setAnimateOut(false);
              setItem("iPhone");
            }}
            className="px-5">
            iPhone
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setAnimateOut(false);
              setItem("Watch");
            }}
            className="px-5">
            Watch
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setAnimateOut(false);
              setItem("Airpods");
            }}
            className="px-5">
            Airpods
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setAnimateOut(false);
              setItem("TV");
            }}
            className="px-5">
            Tv & Home
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Entertainment");
              setAnimateOut(false);
            }}
            className="px-5">
            Entertainment
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Accessories"); setAnimateOut(false);

            }}
            className="px-5">
            Accessories
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setAnimateOut(false);
              setItem("Support");
            }}
            className="px-5">
            Support
          </p>
        </ul>
        {hover && (
          <ExpandNavbar
            background={props.background}
            textColor={props.textColor}
            hover={hover}
            setHover={setHover}
            prop={item}
            setItem={setItem}
            animate={AnimateOut}
          />
        )}
      </div>
    </div>
  );
}
