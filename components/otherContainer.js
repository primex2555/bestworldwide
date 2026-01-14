"use client";

import Nav from "@/components/home/nav";
import Footer from "./home/footer";
import { Card } from "./ui/card";
import Image from "next/image";

export default function OtherContainer({ children, alt, src }) {
  return (
    <>
      <div className="bg-secondary dark:bg-transparent">
        <Nav />
        {/* <Card className="rounded-none bg-secondary"> */}
        <div className="">
          <div className="mx-auto flex min-h-screen w-full items-center bg-secondary px-5 dark:bg-transparent md:w-[70%] lg:w-[80%]">
            <Card className="my-12 rounded-md md:my-24">
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="display-block lg:hidden">
                    <div className="relative h-64 sm:h-80 lg:h-full">
                      <img
                        alt={alt}
                        src={src}
                        className="absolute inset-0 h-full w-full rounded-t-md object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="p-8 text-center lg:p-12">{children}</div>
                  <div className="hidden lg:inline-block">
                    <div className="relative h-64 sm:h-80 lg:h-full">
                      <img
                        alt={alt}
                        src={src}
                        className="absolute inset-0 h-full w-full rounded-r-md object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* </Card> */}
        <Footer />
      </div>
    </>
  );
}
