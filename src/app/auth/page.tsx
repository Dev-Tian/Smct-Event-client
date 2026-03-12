"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const query = useSearchParams();
  const mode = query.get("mode");
  useEffect(() => {
    if (mode === "login") {
      setIsLogin(true);
    }
    if (mode === "register") {
      setIsLogin(false);
    }
    console.log("mode changed to:", mode);
  }, [mode]);

  const handleRegister = async () => {
    // try{
    //   const register =
    // }catch(){
    // }
  };
  return (
    <div
      className={`relative flex items-center justify-center h-screen overflow-hidden bg-center bg-cover bg-linear-to-tl from-cyan-500 via-gray-300 to-sky-700`}
    >
      <div className={`flex z-20 w-2/4 h-4/6  mt-20`}>
        <div
          className={`
            z-20 w-1/2 h-full bg-black bg-cover bg-center transition-all duration-1000 ease-in-out shadow-inner
            ${
              isLogin
                ? "translate-x-full rounded-r-2xl"
                : "translate-x-0 rounded-l-2xl"
            }
            `}
          style={{
            backgroundImage: isLogin
              ? "url(/background/login.jpeg)"
              : "url(/background/register.jpg)",
          }}
        >
          <div
            className={`z-30 w-full h-full bg-white/25 ${
              isLogin ? "rounded-r-2xl" : "rounded-l-2xl"
            }`}
          ></div>
        </div>

        <div
          className={` absolute sm:w-2/4 md:w-2/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 h-4/6 bg-white z-30 rounded-sm text-gray-800 text-center transition-all translate-x-none ease-in-out duration-800 ${
            isLogin
              ? "lg:translate-x-0 xl:translate-x-0 2xl:translate-x-0 lg:rounded-l-2xl xl:rounded-l-2xl 2xl:rounded-l-2xl"
              : "lg:translate-x-full xl:translate-x-full 2xl:translate-x-full  lg:rounded-r-2xl xl:rounded-r-2xl 2xl:rounded-r-2xl"
          }`}
        >
          <div className={`${isLogin ? "block" : "hidden"} p-20`}>
            <h2 className="font-semibold text-3xl font-[cursive] mb-20">
              Login
            </h2>
            <button
              onClick={() => {
                setIsLogin(false);
                router.push("/auth?mode=register");
              }}
            >
              Switch to Register
            </button>
          </div>
          <div className={`${isLogin ? "hidden" : "block"} p-20`}>
            <h2 className="font-semibold text-3xl font-[cursive] mb-20">
              Register
            </h2>
            <button
              onClick={() => {
                setIsLogin(true);
                router.push("/auth?mode=login");
              }}
            >
              Switch to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
