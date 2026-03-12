"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavComponent() {
  // Top nav and side nav state
  const [showNav, setShowNav] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const router = useRouter();

  const [showNewDialog, setShowNewDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (mode: string) => {
    router.push(`/auth?mode=${mode}`);
  };

  return (
    <div>
      {/* top bar nav */}
      <nav
        className={`flex z-30 shadow-lg flex-row justify-between items-center gap-3 fixed w-full h-1/10  backdrop-blur-2xl p-3 transition-color duration-700 ease-in-out ${
          showNav ? "bg-blue-900  opacity-100" : "-bg-transparent opacity-100"
        }`}
      >
        <div className="flex flex-row items-center w-3/4 h-full gap-3">
          <div className="w-25 sm:hidden md:hidden lg:block xl:block 2xl:lg"></div>
          <img src="/background/logo.jpg" className="h-12 ml-5 w-15" alt="" />
          <div className="flex flex-row items-center w-3/4 h-full">
            <h2
              className={`ml-3 font-serif text-lg font-semibold text-gray-100 ${
                showNav ? "text-gray-200" : "text-white"
              } `}
            >
              SMCT EVENTS
            </h2>
          </div>
        </div>
        <div
          className={`flex-row items-center justify-start hidden w-1/4 h-full gap-5 font-sans text-xl lg:flex xl:flex 2xl:flex me-5 ${
            showNav ? "text-gray-200" : "text-white"
          }`}
        >
          <a className="cursor-pointer" onClick={() => router.push("/")}>
            Home
          </a>
          <a href="/#about">About</a>
          <div className="block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-center gap-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Profile
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem onSelect={() => handleNav("register")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                      />
                    </svg>
                    Register
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleNav("login")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                    Login
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="items-center ">
          <button
            className="p-2 rounded-2xl lg:hidden xl:hidden 2xl:hidden"
            onClick={() => setShowSideNav(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
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
      <nav
        className={` fixed inset-0 flex justify-end ${
          showSideNav ? "z-30" : "mouse-events-none"
        } `}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ${
            showSideNav ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Side Nav */}
        <div
          className={`h-full w-full xl:w-1/5 2xl:w-1/5 bg-gray-800 rounded-l-lg p-3 transform transition-transform duration-300 ease-in-out ${
            showSideNav ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <div className="flex justify-end w-full mt-5">
            <button
              onClick={() => setShowSideNav(false)}
              className="flex px-3 py-1 mb-4 text-white rounded"
            >
              <div
                className={`w-5 h-1 bg-red-600 rounded-full transform transition-transform ease-in-out duration-1000 ${
                  showSideNav ? "rotate-225" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-1 bg-red-600 rounded-full transform transition-transform ease-in-out duration-1000 ${
                  showSideNav
                    ? "rotate-315 absolute translate-x-0"
                    : "translate-x-20"
                }`}
              ></div>
            </button>
          </div>

          <ul className="text-white">
            <li className="mb-2">
              <button
                onClick={() => {
                  router.push("/");
                  setShowSideNav(false);
                }}
              >
                Home
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => {
                  router.push("/#about");
                  setShowSideNav(false);
                }}
              >
                About
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => {
                  handleNav("register");
                  setShowSideNav(false);
                }}
              >
                Register
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => {
                  handleNav("login");
                  setShowSideNav(false);
                }}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
