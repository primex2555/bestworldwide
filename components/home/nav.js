"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../logo";

export default function Nav({ bg, text }) {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window) {
        const newWidth = window.innerWidth;
        setScreenWidth(newWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={`${bg} ${text || "text-muted-foreground"}`}>
        <nav className="hidden lg:block">
          <div className="flex items-center justify-between p-5 text-sm lg:px-6">
            <div>
              <Logo />
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <Link href={"/"}>Home</Link>

              <Link href={"/news"}>News</Link>

              <Link href={"/contact"}>Contact</Link>

              <Link href={"/login"}>Login </Link>
            </div>
          </div>
        </nav>

        <nav className="lg:hidden">
          <div className="flex items-center justify-between px-5 py-2 text-sm lg:px-6">
            <Logo />
            <div
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
          {open && (
            <>
              <div
                className={`z-10 h-full w-full transform px-2 text-secondary transition-transform dark:text-primary lg:py-4 ${
                  open ? "translate-x-0 border-secondary" : "translate-x-full"
                }`}
              >
                <div className="flex flex-col gap-x-2 gap-y-4 p-4 text-left text-sm text-muted-foreground lg:space-x-8">
                  <Link href={"/"}>Home</Link>

                  <Link href={"/news"}>News</Link>

                  <Link href={"/contact"}>Contact</Link>

                  <Link href={"/login"}>Login </Link>
                </div>
              </div>
            </>
          )}
        </nav>
      </div>
    </>
  );
}
