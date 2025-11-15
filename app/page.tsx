"use client";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
   AOS.init({
     duration: 800,
    //  once: true,
     });
  }, []);
  
  return (
    <div>
      {/* top bar nav */}
      <nav className={`flex flex-row justify-between items-center gap-3 fixed w-full h-20  backdrop-blur-xl z-20 p-3 transition-color duration-700 ease-in-out ${showNav ? "bg-blue-900  opacity-100" : "-bg-transparent opacity-100" }`}>
        <div className="flex flex-row h-full w-3/4 items-center gap-3">
          <img src="/background/back.jpg" className="w-12 h-12 rounded-full ml-3" alt=""/>
          <div className="flex flex-row w-3/4 h-full items-center">
            <h2 className="text-gray-300 ml-3 text-lg font-semibold font-serif ">SMCT EVENTS</h2>
          </div>
        </div>
        <div className="hidden lg:flex xl:flex 2xl:flex flex-row w-1/3 h-full gap-3 items-center justify-end me-5">
          <a href="#about">About</a>
          <a href="">About</a>
          <a href="">About</a>
          <a href="">About</a>
        </div>
        <div className=" items-center">
          <button className="p-2 rounded-2xl lg:hidden xl:hidden 2xl:hidden" onClick={() =>setShowSideNav(true) }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* side bar nav */}
      <nav className={` fixed inset-0 flex justify-end ${showSideNav ? "z-30" : "mouse-events-none"} `}>
        {/* Backdrop */}
        <div className={`fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ${showSideNav ? "opacity-100" : "opacity-0 pointer-events-none" }`}>
        </div>

        {/* Side Nav */}
        <div className={`h-full w-full xl:w-1/5 2xl:w-1/5 bg-gray-800 rounded-l-lg p-3 transform transition-transform duration-300 ease-in-out ${showSideNav ? "translate-x-0" : "translate-x-full"} `} >
          <div className="w-full flex justify-end mt-5">
            <button
              onClick={() => setShowSideNav(false)}
              className="mb-4 px-3 py-1 text-white rounded flex"
              >
              <div className={`w-5 h-1 bg-red-600 rounded-full transform transition-transform ease-in-out duration-1000 ${showSideNav ? "rotate-225" : ""}`}></div>
              <div className={`w-5 h-1 bg-red-600 rounded-full transform transition-transform ease-in-out duration-1000 ${showSideNav ? "rotate-315 absolute translate-x-0" : "translate-x-20"}`}></div>
          </button>
          </div>

          <ul className="text-white">
            <li className="mb-2"><a href="#about">Dashboard</a></li>
            <li className="mb-2">Profile</li>
            <li className="mb-2">Settings</li>
          </ul>
        </div>
      </nav>

      <div
        className="relative h-screen flex bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: "url(/background/back.jpg)" }}
      >
        <div className="absolute inset-0 z-10 bg-black/50"></div>

        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold">Welcome</h1>
        </div>
      </div>

      <div className="p-8 mt-20">
        <h2 className={`text-2xl font-semibold mb-4`} data-aos="fade" id="about">About the Event</h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum cumque incidunt suscipit beatae rem ipsam, quidem corporis quo neque totam ab voluptates natus adipisci voluptate itaque, 
          quia, earum tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum cumque incidunt suscipit beatae rem ipsam, quidem corporis quo neque totam ab voluptates natus adipisci voluptate itaque, 
          quia, earum tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum cumque incidunt suscipit beatae rem ipsam, quidem corporis quo neque totam ab voluptates natus adipisci voluptate itaque, 
          quia, earum tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum cumque incidunt suscipit beatae rem ipsam, quidem corporis quo neque totam ab voluptates natus adipisci voluptate itaque, 
          quia, earum tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum cumque incidunt suscipit beatae rem ipsam, quidem corporis quo neque totam ab voluptates natus adipisci voluptate itaque, 
          quia, earum tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum cumque incidunt suscipit beatae rem ipsam, quidem corporis quo neque totam ab voluptates natus adipisci voluptate itaque, 
          quia, earum tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum cumque incidunt suscipit beatae rem ipsam, quidem corporis quo neque totam ab voluptates natus adipisci voluptate itaque, 
          quia, earum tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eum cumque incidunt suscipit beatae rem ipsam, quidem corporis quo neque totam ab voluptates natus adipisci voluptate itaque, 
          quia, earum tempore!
          </p>
    </div>
    </div>
  );
}
