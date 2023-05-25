"use client";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";

export default function ExpandNavbar(props: any) {
  let [render, setRender] = useState(false);
  let [scroll, setScroll] = useState(0);
  let [item, setItem] = useState(props.prop);

  useEffect(() => {
    setScroll(window.scrollY);
    document.addEventListener("mouseleave", () => {
      disappear();
      setRender(false);
    });
    document.addEventListener("scroll", () => {
      if (window.scrollY > scroll) {
        disappear();
        setRender(false);
      }
      setScroll(window.scrollY);
    });
  }, []);
  function renderItems() {
    let el = document.getElementsByClassName("info");
    if (el) {
      Array.from(el).forEach((y) => {
        let delay = 0.1;
        Array.from(y.childNodes).forEach((x) => {
          gsap.fromTo(
            x,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, delay: delay }
          );
          delay += 0.03;
        });
      });
    } else {
      console.log("Not el");
    }
  }
  function disappear() {
    let delay = 0.05;
    let el = document.getElementById("info");
    if (el) {
      console.log(el);
      let arr = Array.from(el.childNodes);
      console.log(arr);
      for (var i = arr.length - 1; i >= 0; i--) {
        gsap.fromTo(
          arr[i],
          { opacity: 1 },
          { opacity: 0, duration: 0.3, delay: delay }
        );
        delay += 0.03;
        if (i == 0) {
          gsap.to("#main", {
            height: 0,
            duration: 0.3,
            delay: delay,
            onComplete: () => {
              props.setHover(false);
            },
          });
        }
      }
    } else {
      gsap.to("#main", {
        height: 0,
        duration: 0.3,
        delay: delay,
        onComplete: () => {
          props.setHover(false);
        },
      });
    }
  }
  useEffect(() => {
    if (props.prop.length == 0) {
      console.log("Disappear");
      disappear();
      setRender(false);
    }
    //User moves onto navbar for first time
    else if (props.hover && !render) {
      gsap.set("#blur", { height: "100vh" });
      gsap.fromTo(
        "#main",
        { height: 0 },
        {
          height: "auto",
          duration: 0.5,
          onComplete: () => {
            gsap.set("#main", {
              height: document.getElementById("main")?.offsetHeight,
            });
          },
        }
      );
      renderItems();
      setRender(true);
    }
    //User moves from one item to another
    else if (render && props.hover) {
      gsap.to("#main", {
        height: "auto",
        duration: 0.3,
        onComplete: () => {
          gsap.set("#main", {
            height: document.getElementById("main")?.offsetHeight,
          });
        },
      });
      renderItems();
    }
    //User moves off entirely
    else if (!props.hover) {
      disappear();
      setRender(false);
    }
  }, [props]);
  return (
    <div>
      <div
        id="main"
        className="h-0 z-40 relative w-full mt-2 text-neutral-50 overflow-hidden bg-[#434344] font-xl">
        {props.prop == "Store" && (
          <div className="flex-row flex w-auto overflow-hidden py-10 ml-[201px]">
            <ul className="text-xl mr-12 info">
              <p className="text-sm pb-4">Shop</p>
              <p className="mb-1 font-semibold">Shop the latest</p>
              <p className="mb-1 font-semibold">Mac</p>
              <p className="mb-1 font-semibold">iPad</p>
              <p className="mb-1 font-semibold">iPhone</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="mb-1 font-semibold">Accessories</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="pb-4">Quick links</p>
              <p className="mb-1 font-semibold">Find a Store</p>
              <p className="mb-1 font-semibold">Order Status</p>
              <p className="mb-1 font-semibold">Apple Trade In</p>
              <p className="mb-1 font-semibold">Financing</p>
            </ul>
            <ul className="text-sm info">
              <p className="pb-4">Shop Special Stores</p>
              <p className="mb-1 font-semibold">Certified Refurbished</p>
              <p className="mb-1 font-semibold">Education</p>
              <p className="mb-1 font-semibold">Business</p>
              <p className="mb-1 font-semibold">Veternas and Military</p>
              <p className="mb-1 font-semibold">Government</p>
            </ul>
          </div>
        )}
        {props.prop == "Mac" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore Mac</p>
              <p className="mb-1 font-semibold">MacBook Air</p>
              <p className="mb-1 font-semibold">MacBook Pro</p>
              <p className="mb-1 font-semibold">iMac</p>
              <p className="mb-1 font-semibold">Mac mini</p>
              <p className="mb-1 font-semibold">Mac Studio</p>
              <p className="mb-1 font-semibold">Mac Pro</p>
              <p className="mb-1 font-semibold">Displays</p>
              <p className="font-semibold text-sm mt-4 mb-2">Compare Mac</p>
              <p className="font-semibold text-sm">Mac Does That</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="mb-1 pb-4">Shop Mac</p>
              <p className="mb-1 font-semibold">Mac Accessories</p>
              <p className="mb-1 font-semibold">Apple Trade In</p>
              <p className="mb-1 font-semibold">Financing</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="pb-4">More from Mac</p>
              <p className="mb-1 font-semibold">Mac Support</p>
              <p className="mb-1 font-semibold">macOS Ventura</p>
              <p className="mb-1 font-semibold">Final Cut Pro</p>
              <p className="mb-1 font-semibold">Logic Pro</p>
              <p className="mb-1 font-semibold">Continuity</p>
              <p className="mb-1 font-semibold">iCloud</p>
              <p className="mb-1 font-semibold">Mac for Business</p>
              <p className="mb-1 font-semibold">Education</p>
            </ul>
          </div>
        )}
        {props.prop == "iPad" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore iPad</p>
              <p className="mb-1 font-semibold">Explore All iPad</p>
              <p className="mb-1 font-semibold">iPad Pro</p>
              <p className="mb-1 font-semibold">iPad Air</p>
              <p className="mb-1 font-semibold">iPad</p>
              <p className="mb-1 font-semibold">iPad mini</p>
              <p className="mb-1 font-semibold">Apple Pencil</p>
              <p className="mb-1 font-semibold">Keyboards</p>
              <p className="font-semibold text-sm mt-4 mb-2">Compare iPad</p>
              <p className="font-semibold text-sm">Why iPad</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="pb-4">Shop iPad</p>
              <p className="mb-1 font-semibold">Shop iPad</p>
              <p className="mb-1 font-semibold">iPad Accessories</p>
              <p className="mb-1 font-semibold">Apple Trade In</p>
              <p className="mb-1 font-semibold">Financing</p>
            </ul>
            <ul className="info text-sm mr-12">
              <p className="pb-4">More from iPad</p>
              <p className="mb-1 font-semibold">iPad Support</p>
              <p className="mb-1 font-semibold">iPadOS 16</p>
              <p className="mb-1 font-semibold">Final Cut Pro for iPad</p>
              <p className="mb-1 font-semibold">Logic Pro for iPad</p>
              <p className="mb-1 font-semibold">iCloud</p>
              <p className="mb-1 font-semibold">Education</p>
            </ul>
          </div>
        )}
        {props.prop == "iPhone" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore iPhone</p>
              <p className="mb-1 font-semibold">Explore all iPhone</p>
              <p className="mb-1 font-semibold">iPhone 14 Pro</p>
              <p className="mb-1 font-semibold">iPhone 14</p>
              <p className="mb-1 font-semibold">iPhone 13</p>
              <p className="mb-1 font-semibold">iPhone 12</p>
              <p className="mb-1 font-semibold">iPhone SE</p>
              <p className="font-semibold text-sm mt-4 mb-2">Compare iPhone</p>
              <p className="font-semibold text-sm">Switch to iPhone</p>
            </ul>
            <ul className="text-sm mr-12 info">
              <p className="pb-4">Shop iPhone</p>
              <p className="mb-1 font-semibold">Shop iPhone</p>
              <p className="mb-1 font-semibold">iPhone Accessories</p>
              <p className="mb-1 font-semibold">Apple Trade In</p>
              <p className="mb-1 font-semibold">Carrier Deals at Apple</p>
              <p className="mb-1 font-semibold">Financing</p>
            </ul>
            <ul className="text-sm mr-12 info">
              <p className="pb-4">More From iPhone</p>
              <p className="mb-1 font-semibold">iPhone Support</p>
              <p className="mb-1 font-semibold">iOS 16</p>
              <p className="mb-1 font-semibold">iPhone Privacy</p>
              <p className="mb-1 font-semibold">iCloud</p>
              <p className="mb-1 font-semibold">Wallet, Pay, Card</p>
              <p className="mb-1 font-semibold">Siri</p>
            </ul>
          </div>
        )}
        {props.prop == "Watch" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore Apple Watch</p>
              <p className="mb-1 font-semibold">Explore All Apple Watch</p>
              <p className="mb-1 font-semibold">Apple Watch Ultra</p>
              <p className="mb-1 font-semibold">Apple Watch Series 8</p>
              <p className="mb-1 font-semibold">Apple Watch SE</p>
              <p className="mb-1 font-semibold">Apple Watch Nike</p>
              <p className="mb-1 font-semibold">Apple Watch Hermes</p>
              <p className="font-semibold text-sm mt-4 mb-2">Compare Watch</p>
              <p className="font-semibold text-sm">Why Apple Watch</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Shop Watch</p>
              <p className="mb-1 font-semibold">Shop Apple Watch</p>
              <p className="mb-1 font-semibold">Apple Watch Studio</p>
              <p className="mb-1 font-semibold">Apple Watch Bands</p>
              <p className="mb-1 font-semibold">Apple Watch Accessories</p>
              <p className="mb-1 font-semibold">Apple Trade In</p>
              <p className="mb-1 font-semibold">Financing</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">More from Watch</p>
              <p className="mb-1 font-semibold">Apple Watch Support</p>
              <p className="mb-1 font-semibold">watchOS 9</p>
              <p className="mb-1 font-semibold">Apple Fitness+</p>
            </ul>
          </div>
        )}
        {props.prop == "Airpods" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore AirPods</p>
              <p className="mb-1 font-semibold">Explore All Airpods</p>
              <p className="mb-1 font-semibold">AirPods 2nd generation</p>
              <p className="mb-1 font-semibold">AirPods 3rd generation</p>
              <p className="mb-1 font-semibold">AirPods Pro 2nd generation</p>
              <p className="mb-1 font-semibold">AirPods Max</p>
              <p className="text-sm font-semibold mt-4 mb-2">Compare Watch</p>
              <p className="text-sm font-semibold">Why Apple Watch</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Shop AirPods</p>
              <p className="mb-1 font-semibold">Shop AirPods</p>
              <p className="mb-1 font-semibold">AirPods Accessories</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">More from AirPods</p>
              <p className="mb-1 font-semibold">AirPods Support</p>
              <p className="mb-1 font-semibold">Apple Music</p>
            </ul>
          </div>
        )}
        {props.prop == "TV" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore TV & Home</p>
              <p className="mb-1 font-semibold">Explore TV & Home</p>
              <p className="mb-1 font-semibold">Apple TV 4K</p>
              <p className="mb-1 font-semibold">HomePod</p>
              <p className="mb-1 font-semibold">HomePod Mini</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Shop TV & Home</p>
              <p className="mb-1 font-semibold">Shop HomePod</p>
              <p className="mb-1 font-semibold">Shope HomePod mini</p>
              <p className="mb-1 font-semibold">Shop Siri Remote</p>
              <p className="mb-1 font-semibold">TV & Home Accessories</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">More from TV & Home</p>
              <p className="mb-1 font-semibold">Apple TV Support</p>
              <p className="mb-1 font-semibold">HomePod Support</p>
              <p className="mb-1 font-semibold">Apple TV app</p>
              <p className="mb-1 font-semibold">Apple TV+</p>
              <p className="mb-1 font-semibold">Home app</p>
              <p className="mb-1 font-semibold">Apple Music</p>
              <p className="mb-1 font-semibold">Siri</p>
              <p className="mb-1 font-semibold">AirPlay</p>
            </ul>
          </div>
        )}
        {props.prop == "Entertainment" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore Entertainment</p>
              <p className="mb-1 font-semibold">Explore Entertainment</p>
              <p className="mb-1 font-semibold">Apple One</p>
              <p className="mb-1 font-semibold">Apple TV+</p>
              <p className="mb-1 font-semibold">Apple Music</p>
              <p className="mb-1 font-semibold">Apple Arcade</p>
              <p className="mb-1 font-semibold">Apple Fitness+</p>
              <p className="mb-1 font-semibold">Apple News+</p>
              <p className="mb-1 font-semibold">Apple Podcasts</p>
              <p className="mb-1 font-semibold">Apple Books</p>
              <p className="mb-1 font-semibold">App Store</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Support</p>
              <p className="mb-1 font-semibold">Apple TV+ Support</p>
              <p className="mb-1 font-semibold">Apple Music Support</p>
            </ul>
          </div>
        )}
        {props.prop == "Accessories" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Shop Accessories</p>
              <p className="mb-1 font-semibold">Shop All Accessories</p>
              <p className="mb-1 font-semibold">Mac</p>
              <p className="mb-1 font-semibold">iPad</p>
              <p className="mb-1 font-semibold">iPhone</p>
              <p className="mb-1 font-semibold">Apple Watch</p>
              <p className="mb-1 font-semibold">AirPods</p>
              <p className="mb-1 font-semibold">TV & Home</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Explore Accessores</p>
              <p className="mb-1 font-semibold">Made by Apple</p>
              <p className="mb-1 font-semibold">Beats by Dr. Dre</p>
              <p className="mb-1 font-semibold">AirTag</p>
            </ul>
          </div>
        )}
        {props.prop == "Support" && (
          <div className="flex-row flex w-auto  py-10 ml-[201px]">
            <ul className="text-xl info mr-12">
              <p className="text-sm pb-4">Explore Support</p>
              <p className="mb-1 font-semibold">iPhone</p>
              <p className="mb-1 font-semibold">Mac</p>
              <p className="mb-1 font-semibold">iPad</p>
              <p className="mb-1 font-semibold">Watch</p>
              <p className="mb-1 font-semibold">AirPods</p>
              <p className="mb-1 font-semibold">Music</p>
              <p className="mb-1 font-semibold">TV</p>
              <p className="text-sm mt-4 font-semibold pb-4">Explore Support</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Get Help</p>
              <p className="mb-1 font-semibold">Community</p>
              <p className="mb-1 font-semibold">Check Coverage</p>
              <p className="mb-1 font-semibold">Repair</p>
              <p className="mb-1 font-semibold">Contact Us</p>
            </ul>
            <ul className="text-sm info mr-12">
              <p className="mb-1 pb-4">Helpful Topics</p>
              <p className="mb-1 font-semibold">Get AppleCare+</p>
              <p className="mb-1 font-semibold">Apple ID & Password</p>
              <p className="mb-1 font-semibold">Billing & Subscription</p>
              <p className="mb-1 font-semibold">Find My</p>
              <p className="mb-1 font-semibold">Accessibility</p>
            </ul>
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => {
          disappear();
        }}
        id="blur"
        className={`h-0 w-full z-40 backdrop-blur-sm absolute top-[${
          document.getElementById("main")?.offsetHeight
        }px] overflow-visible`}></div>
    </div>
  );
}
