"use client";
// Import global styles and fonts

import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Button } from "../components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-slate-100 to-orange-200">
          <div className="flex items-center justify-center w-3/4 gap-7 h-3/4">
            <img
              className="w-100"
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWdqMWU4dzlmbW5xODdhZWMzMTNleDRoNm4xYm91dDZvbTZ4dHF6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jPsraWbk0eJHxp474l/giphy.gif"
              alt=""
            />
            <div className="text-center">
              <h1 className="mt-2 font-serif text-6xl italic font-bold">
                Page
              </h1>
              <h1 className="mt-2 font-serif text-6xl italic font-bold">Not</h1>
              <h1 className="mt-2 font-serif text-6xl italic font-bold">
                Found
              </h1>
              <Button
                className="mt-5"
                variant="secondary"
                onClick={() => {
                  location.href = "/";
                }}
              >
                Go back to Home Page
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
