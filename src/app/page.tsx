"use client";

import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Loading from "../components/loading";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  async function load() {
    setIsLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoad(false);
  }

  useEffect(() => {
    load();
    setMounted(true);
    AOS.init({ duration: 800 });
  }, []);

  if (!mounted) return null; // render nothing on server

  return (
    // <div>
    //   {isLoad && <Loading classname="inset-0" />}
    //   <div className="relative inset-0" id="home">
    //     <div className="absolute inset-0 z-10 w-full h-screen bg-gray-500 opacity-50"></div>

    //
    //   </div>
    //   <div className="p-8 mt-20" id="about">
    //     <h2
    //       className="mb-4 text-2xl font-semibold"
    //       data-aos={mounted ? "fade" : undefined}
    //     >
    //       About the Event
    //     </h2>
    //     <p data-aos={mounted ? "fade-up" : undefined}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit...
    //     </p>
    //   </div>
    //   <footer className="flex items-center justify-center w-full bg-blue-900 h-50 mt-50">
    //     <p className="text-white">© 2025 SMCT Event. All rights reserved.</p>
    //   </footer>
    // </div>
    <div className="relative">
      {/* Sticky section */}
      <div
        className="sticky top-0 w-full h-screen bg-center bg-cover"
        style={{
          backgroundImage: "url('/background/home-bg.jpg')",
        }}
      >
        {/* Overlay INSIDE sticky */}
        <div className="absolute w-full h-screen bg-black-50/50">
          <h1 className="text-5xl font-bold text-center text-white mt-80">
            WE ARE A FULL SERVICE DIGITAL COMPANY
          </h1>
          <p className="mt-1 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            deleniti maio. Earum...
          </p>
        </div>
      </div>

      {/* Scroll content */}
      <div className="relative z-10 flex justify-center w-full bg-white">
        <div className="w-5/6 bg-white rounded-xl mt-[-130] p-5 shadow-2xl">
          <h1
            className="mt-25 mb-10 text-5xl font-extrabold text-center font-[cursive]"
            data-aos={mounted ? "fade" : undefined}
          >
            TITTLE
          </h1>
          <p data-aos={mounted ? "fade" : undefined}>
            Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat voluptate alias nulla commodi, quae optio
            ab aliquam veniam esse adipisci dolores! Lorem ipsum dolor sit
            amet... Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat voluptate alias nulla commodi, quae optio ab consequuntur
            ipsa, asperiores voluptates quod ex quis magnam fugit aliquam veniam
            esse Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat voluptate alias nulla commodi, quae optio ab consequuntur
            ipsa, asperiores voluptates quod ex quis magnam fugit aliquam veniam
            esse adipisci dolores! Lorem ipsum dolor sit amet... Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Placeat voluptate alias
            nulla commodi, quae optio ab consequuntur ipsa, asperiores
            voluptates quod ex quis magnam fugit aliquam veniam esse adipisci
            dolores! Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet
            consectetur adipisicing asperiores voluptates quod ex quis magnam
            fugit aliquam veniam esse adipisci dolores! Lorem ipsum dolor sit
            amet... Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat voluptate alias nulla commodi, quae optio ab consequuntur
            ipsa, asperiores voluptates quod ex quis magnam fugit aliquam veniam
            esse adipisci dolores! Lorem ipsum dolor sit amet... Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Placeat voluptate alias
            nulla commodi, quae optio ab consequuntur ipsa, asperiores
            voluptates quod ex quis magnam fugit aliquam veniam esse adipisci
            dolores! Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat voluptate alias nulla commodi,
            quae optio ab consequuntur ipsa, asperiores voluptates quod ex quis
            magnam fugit aliquam veniam esse adipisci dolores! Lorem ipsum dolor
            sit amet... Lorem ipsum dolor sit consequuntur ipsa, asperiores
            voluptates quod ex quis magnam fugit aliquam veniam esse adipisci
            dolores! Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Placeat voluptate alias nulla commodi,
            quae optio ab consequuntur ipsa, asperiores voluptates quod ex quis
            magnam fugit aliquam veniam esse adipisci dolores!
          </p>
        </div>
      </div>
    </div>
  );
}
