"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState, useEffect } from "react";
import { Card } from "../ui/card";
import Benefit from "./benefit";

export default function WhatPeople() {
  const swiperRef = useRef();
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Card className="h-full w-full rounded-none border-x-0 border-b-0 bg-secondary dark:border-x-0 dark:border-t-0 dark:bg-transparent">
        <div className="px-5 py-12 lg:p-24">
          <Benefit />
          <div className="mb-10 flex items-center justify-between">
            <div className="heading-home hidden lg:inline-block">
              What people say about us
            </div>
            <div className="heading-home lg:hidden">Testimonials</div>
            <div className="flex justify-end">
              <div className="space-x-2">
                <div
                  className="inline-block cursor-pointer rounded-full border bg-transparent p-3"
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div
                  className="inline-block cursor-pointer rounded-full border bg-transparent p-3 "
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Swiper
              spaceBetween={20}
              slidesPerView={
                screenWidth < 640
                  ? 1.2
                  : screenWidth < 768
                    ? 1.4
                    : screenWidth < 1024
                      ? 2.3
                      : 2.3
              }
              ref={swiperRef}
              navigation={{
                prevEl: ".my-prev-button",
                nextEl: ".my-next-button",
              }}
            >
              <SwiperSlide>
                <Cardx
                  image={"f1.webp"}
                  one={"Kandace Stranger"}
                  two={"Financial Analyst"}
                  three={
                    "Trading was just a hobby for me over the last decade, but I couldn't find consistent returns. However, since discovering automated trading here, I'm convinced it's my future full-time pursuit. The approach taught is straightforward with clear entries and exits, making it easy to execute for consistent success. I started with the swing trade strategy and look forward to mastering others. Wish I had found this sooner!"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cardx
                  image={"f2.webp"}
                  one={"Linda Hornsby"}
                  two={"Passive Investor"}
                  three={
                    "The customer care was prompt and helpful. Highly recommended for business. It is very easy, very fast, many choices, and friendly customer service, much updated and very helpful. No, the best word to describe. Thanks guys!!! "
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cardx
                  image={"m1.webp"}
                  one={"Dan Razumoff"}
                  two={"Software developer"}
                  three={
                    "It automated trading Bots surpassed my expectations. Investing on the platform is excellent and it allows for making accurate graphical analyses of the market."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cardx
                  image={"m2.webp"}
                  one={"Walsh Apponi"}
                  two={"Investor"}
                  three={
                    "Trading is free. You pay a small fee to use their money. The best part about them is their incredible user interface. I use it to check stocks even when I trade on Fidelity from a different account. It has been used by me for a month and I love it!"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cardx
                  image={"m3.webp"}
                  one={"Chris Hulse"}
                  two={"Investor"}
                  three={
                    "Easy to use, straight-forward transactions. It's great for beginners who are new to the crypto and stocks market. I would suggest everyone try it."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cardx
                  image={"f3.webp"}
                  one={"Joann Figueora"}
                  two={"Long term Investor"}
                  three={
                    "I love this Platform. They allow for recurring investments daily for stocks and have IPO early entry on companies and now have crypto. Excited about what they will do in future."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Cardx
                  image={"m4.webp"}
                  one={"Paulo Castro Reis"}
                  two={"Investor"}
                  three={
                    "Why to choose us as a beginner trader... I have been trading on LiveTradechart for a while now, and so far, only have the most pleasant impressions of the platform. They take great care of newbies, offering free training and an unlimited demo account. It remains only to understand how to use  LiveTradechart correctly to start getting additional income."
                  }
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Card>
    </>
  );
}

function Cardx({ image, one, two, three }) {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center gap-x-4">
        <Image
          src={"/" + image}
          width={"60"}
          height={"60"}
          className="mb-2 rounded-full"
          alt={image}
        />
        <div>
          <span className="text-2xl">{one}</span>
          <br />
          <span className="py-1 text-sm text-gray-700">{two}</span>
        </div>
      </div>

      <span className="text-gray-600">{three}</span>
    </Card>
  );
}
