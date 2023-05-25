"use client";

import { useState } from "react";

export default function ContentGrid() {
  let [learn, setLearn] = useState(false);
  let [buy, setBuy] = useState(false);
  let [devLearn, setdevLearn] = useState(false);
  let [cardLearn, setcardLearn] = useState(false);
  let [cardApply, setcardApply] = useState(false);
  let [ipadLearn, setipadLearn] = useState(false);
  let [ipadBuy, setipadBuy] = useState(false);
  let [privacyLearn, setprivacyLearn] = useState(false);

  return (
    <div className="h-auto grid grid-cols-2 grid-rows-3 mx-4 space-x-2 space-y-2 border-2 w-auto">
      <div
        className="rounded-xl"
        style={{
          position: "relative",
          background: "url('/apple/tradein.jpg')",
          width: "100%",
          height: "624px",
          backgroundPositionX: "-350px",
        }}
      >
        <div
          style={{
            background: "url('/apple/logo_tradein.png')",
            width: "190px",
            height: "50px",
            backgroundRepeat: "no-repeat",
          }}
          className="flex mx-auto mt-4"
        ></div>
        <p className="flex w-auto text-semibold text-2xl justify-center">
          Upgrade and save. It's that easy
        </p>
      </div>
      <div
        style={{
          background: "url('/apple/wwdc.jpg')",
          backgroundPositionX: "-250px",
        }}
        className="rounded-sm"
      >
        <div
          className="flex mx-auto mt-4 w-[210px] h-[50px] z-40"
          style={{
            background: "url('/apple/promo_wwdc.png')",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="text-white text-2xl text-center mt-80 justify-center w-[600px] flex flex-col mx-auto">
          <p>Apple Worldwide Developers Conference</p>
          <p className="mb-2">Join us online June 5-9</p>
          <div
            onMouseOver={() => {
              setdevLearn(true);
            }}
            onMouseLeave={() => {
              setdevLearn(false);
            }}
            className="text-blue-500 flex mt-2 text-xl align-center justify-center text-center w-[600px] mx-auto"
          >
            <p
              className={
                "text-blue-500 text-center" + (devLearn ? " underline" : null)
              }
            >
              Learn more
            </p>
            <p className="ml-1">{">"}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "url('/apple/applewatch.jpg')",
          height: "100%",
          width: "auto",
          backgroundPositionY: "0px",
          backgroundPositionX: "-250px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex mx-auto mt-4 w-[210px] h-[50px] z-40"
          style={{
            background: "url('/apple/applewatchlogo.png')",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p className="text-white text-2xl text-center mx-auto z-40 w-[400px] mt-4 h-auto">
          A healthy leap ahead.
        </p>
        <div className="text-blue-500 mt-2 text-xl align-center justify-center mx-auto w-[400px] text-center flex z-10">
          <div
            className="w-[150px] justify-center align-center text-center flex"
            onMouseOver={() => {
              setLearn(true);
            }}
            onMouseLeave={() => {
              setLearn(false);
            }}
          >
            <p className={"mr-1 flex" + (learn ? " underline" : null)}>
              Learn More
            </p>
            <p>{">"}</p>
          </div>
          <div
            className="w-[100px] mr-2 justify-center align-center text-center flex"
            onMouseOver={() => {
              setBuy(true);
            }}
            onMouseLeave={() => {
              setBuy(false);
            }}
          >
            <p className={"mr-1 flex " + (buy ? " underline" : null)}>Buy</p>
            <p>{">"}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "url('/apple/cardbackground.jpg')",
          width: "auto",
          height: "100%",
          backgroundPositionX: "-250px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            background: "url('/apple/cardlogo.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="w-[108px] mx-auto h-[33px] mt-2"
        ></div>
        <p className="text-black text-xl w-[300px] text-center mx-auto z-40 mt-2 h-auto">
          Get up to 3% Daily Cash back with every purchase.
        </p>
        <div className="text-blue-500 mt-2 text-xl align-center justify-center mx-auto w-[400px] text-center flex z-40">
          <div
            className="w-[150px] justify-center align-center text-center flex"
            onMouseOver={() => {
              setcardLearn(true);
            }}
            onMouseLeave={() => {
              setcardLearn(false);
            }}
          >
            <p className={"mr-1 flex" + (cardLearn ? " underline" : null)}>
              Learn More
            </p>
            <p>{">"}</p>
          </div>
          <div
            className="w-[150px] mr-2 justify-center align-center text-center flex"
            onMouseOver={() => {
              setcardApply(true);
            }}
            onMouseLeave={() => {
              setcardApply(false);
            }}
          >
            <p className={"mr-1 flex " + (cardApply ? " underline" : null)}>
              Apply now
            </p>
            <p>{">"}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "url('/apple/ipad.jpg')",
          width: "auto",
          height: "100%",
          backgroundPositionX: "-250px",
        }}
      >
        <p className="text-center w-[300px] z-40 mt-12 h-auto mx-auto text-black font-semibold text-5xl">
          iPad
        </p>
        <p className="text-center mx-auto w-[500px] mt-2 h-auto text-2xl">
          Lovable. Drawable. Magical.
        </p>
        <div className="text-blue-500 mt-2 text-xl justify-center text-center flex w-auto align-center mx-auto">
          <div
            className="w-[150px] justify-center align-center text-center flex"
            onMouseOver={() => {
              setipadLearn(true);
            }}
            onMouseLeave={() => {
              setipadLearn(false);
            }}
          >
            <p className={"mr-1 flex" + (ipadLearn ? " underline" : null)}>
              Learn More
            </p>
            <p>{">"}</p>
          </div>
          <div
            className="w-[100px] mr-2 justify-center align-center text-center flex"
            onMouseOver={() => {
              setipadBuy(true);
            }}
            onMouseLeave={() => {
              setipadBuy(false);
            }}
          >
            <p className={"mr-1 flex " + (ipadBuy ? " underline" : null)}>
              Buy
            </p>
            <p>{">"}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "url('/apple/privacyiphone.jpg')",
          height: "auto",
          width: "auto",
          backgroundPositionX: "-290px",
          backgroundPositionY: "36px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black h-[50px]"></div>
        <p className="text-white font-semibold text-4xl flex w-[300px] mx-auto text-center align-center justify-center">
          Your health data. In your control.
        </p>
        <p className="text-white text-2xl flex text-center w-[300px] mx-auto justify-center mt-2">
          Privacy. That's iPhone
        </p>
        <div
          onMouseOver={() => {
            setprivacyLearn(true);
          }}
          onMouseLeave={() => {
            setprivacyLearn(false);
          }}
          className="text-blue-500 mt-2 text-xl justify-center text-center flex w-auto align-center mx-auto"
        >
          <p className={"mr-1 flex " + (privacyLearn ? " underline" : null)}>
            Learn more
          </p>
          <p>{">"}</p>
        </div>
      </div>
    </div>
  );
}
