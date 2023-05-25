"use client";
import "react";
import { use, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ExpandNavbar from "./appleNabarExpand";

export default function Navbar() {
  let [hover, setHover] = useState(false);
  let [item, setItem] = useState("");

  let ref = useRef<any>();
  return (
    <div className="bg-[#434344]">
      <div className="h-[50px] relative">
        <ul
          onMouseOverCapture={() => {
            setItem("");
          }}
          className="flex pt-[12px] w-auto justify-center text-neutral-100 text-sm">
          <img
            id="start"
            className="flex w-[19.6px] h-[24px]"
            src="/Apple_logo_black.png"
          />
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Store");
            }}
            className="px-5">
            Store
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Mac");
            }}
            className="px-5">
            Mac
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("iPad");
            }}
            className="px-5">
            iPad
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("iPhone");
            }}
            className="px-5">
            iPhone
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Watch");
            }}
            className="px-5">
            Watch
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Airpods");
            }}
            className="px-5">
            Airpods
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("TV");
            }}
            className="px-5">
            Tv & Home
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Entertainment");
            }}
            className="px-5">
            Entertainment
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Accessories");
            }}
            className="px-5">
            Accessories
          </p>
          <p
            onMouseOverCapture={() => {
              setHover(true);
              setItem("Support");
            }}
            className="px-5">
            Support
          </p>
        </ul>
        {hover && (
          <ExpandNavbar
            hover={hover}
            setHover={setHover}
            prop={item}
            setItem={setItem}
          />
        )}
      </div>
    </div>
  );
}
