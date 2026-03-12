"use client";

import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 800 });
  }, []);

  if (!mounted) return null; // render nothing on server

  return (
    <div>
      <div className="relative inset-0 w-full h-screen">
        <div className="absolute inset-0 z-10 w-full h-screen bg-gray-500 opacity-50"></div>

        <Carousel
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="w-full h-screen"
        >
          <CarouselContent>
            <CarouselItem>
              <div
                className="w-full h-screen bg-center bg-cover"
                style={{ backgroundImage: "url('/background/back.jpg')" }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="w-full h-screen bg-center bg-cover"
                style={{ backgroundImage: "url('/background/login.jpeg')" }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="w-full h-screen bg-center bg-cover"
                style={{ backgroundImage: "url('/background/register.jpg')" }}
              ></div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="p-8 mt-20" id="about">
        <h2
          className="mb-4 text-2xl font-semibold"
          data-aos={mounted ? "fade" : undefined}
        >
          About the Event
        </h2>
        <p data-aos={mounted ? "fade-up" : undefined}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>

      <footer className="flex items-center justify-center w-full bg-blue-900 h-50 mt-50">
        <p className="text-white">© 2025 SMCT Event. All rights reserved.</p>
      </footer>
    </div>
  );
}
