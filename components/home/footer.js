"use client";
import { Card } from "../ui/card";
//import TawkToChat from "../../components/twak";
import TranslateComponent from "../googleTranslate";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <Card className="rounded-none border-0 border-t dark:bg-transparent">
        <div className="relative mx-auto max-w-screen-xl px-5 py-16 lg:px-6 lg:py-24">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center justify-center lg:justify-start">
                <Image src={"/logo.png"} width={80} height={80} alt="logo" />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                At {process.env.NEXT_PUBLIC_NAME} we are always ready to partner
                with you by offering full financial support to individuals
                worldwide.
              </p>
            </div>

            <div>
              <div className="mb-8 mt-6 text-center lg:text-end">
                <TranslateComponent />
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <a
                  className="uppercase text-gray-700 transition hover:text-gray-700/75"
                  href="#about"
                >
                  About
                </a>

                <a
                  className="uppercase text-gray-700 transition hover:text-gray-700/75"
                  href="#get"
                >
                  Get started
                </a>

                <a
                  className="uppercase text-gray-700 transition hover:text-gray-700/75"
                  href="#pricing"
                >
                  Pricing
                </a>

                <a
                  className="uppercase text-gray-700 transition hover:text-gray-700/75"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
              <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                Copyright &copy;{new Date().getFullYear()}{" "}
                {process.env.NEXT_PUBLIC_NAME} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Card>
      //<TawkToChat />
    </>
  );
}

// property id
// 67861573af5bfec1dbeb3925

// ticket forwarding email
// tickets@web-wnmju5.p.tawk.email

// direct link
// https://tawk.to/chat/67861573af5bfec1dbeb3925/1ihhs7iub
