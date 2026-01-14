"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "./nav";

export default function Hero() {
  return (
    <>
      <div
        className="bg-black/50 bg-cover bg-blend-overlay"
        style={{ backgroundImage: `url("/hero.jpeg")` }}
      >
        <Nav bg={"transparent"} text={"text-white"} />
        <div className="flex min-h-[40vh] items-center justify-center text-left lg:min-h-[70vh] pb-10 lg:text-center">
          <div className="mx-auto space-y-4 px-5 lg:w-[55%]">
            <div>
              <h4 className="text-2xl font-semibold text-white dark:text-primary md:text-3xl lg:text-4xl">
                THE MOST REGULATED SMART TRADING ON FINANCIAL MARKETS
              </h4>
              <p className="text-sm text-gray-300 md:text-base">
                Mirror An Expert To Grow Value & Knowledge Through Copy Trading,
                Wide Range Of Trading Offers, Options Trading, Stocks,
                Derivatives, Currency Pairs
              </p>
            </div>
            <div className="bottom-0 flex space-x-2 pt-2 lg:justify-center">
              <Button variant="default" className="h-10" asChild>
                <Link href={"/login"}>Login</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link
                  href={"/register"}
                  className="flex h-10 items-center gap-2 text-white dark:text-primary"
                >
                  Register
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
