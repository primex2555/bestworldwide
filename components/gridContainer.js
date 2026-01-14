"use client";

import { useState, useEffect } from "react";
import Nav from "./nav";
import Image from "next/image";
import Logo from "./logo";

const GridContainer = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleMenu = () => {
    setOpen(!open);
  };

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
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-3 text-secondary dark:bg-secondary dark:bg-transparent lg:hidden">
        <Logo />
        <div
          className="cursor-pointer text-secondary dark:text-muted-foreground"
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

      {screenWidth < 1024 && (
        <>
          {open && (
            <>
              <div
                className={`z-10 h-full w-full transform border-b border-gray-400 bg-primary transition-transform dark:bg-transparent dark:text-primary ${
                  open ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {" "}
                <Nav />
              </div>
            </>
          )}
        </>
      )}

      <>
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-5 lg:overflow-hidden">
          <div className="col-span-1 flex hidden h-full justify-center border-r border-secondary bg-primary bg-primary py-10 dark:bg-transparent lg:inline-block lg:h-screen">
            <Nav />
          </div>

          <div className="col-span-1 block min-h-screen overflow-y-auto px-5 py-10 lg:col-span-4 lg:min-h-0 lg:px-10">
            {children}
          </div>
        </div>
      </>
    </>
  );
};

export default GridContainer;
