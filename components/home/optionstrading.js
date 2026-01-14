"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function OptionsTrading() {
  const swiperRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  // const swiperRef = useRef();
  function funcone() {
    setOne(true);
    setTwo(false);
    swiperRef.current.swiper.slidePrev();
  }

  function functwo() {
    setOne(false);
    setTwo(true);
    swiperRef.current.swiper.slideNext();
  }
  return (
    <>
      <Card className="light:border-x-0 h-full w-full rounded-none bg-secondary text-primary dark:border-0 dark:bg-primary dark:bg-transparent">
        <div className="px-5 py-12 lg:p-24">
          <div className="heading-home text-center">
            Explore options trading
          </div>
          <div className="mt-4 flex items-center justify-center gap-x-2 text-base lg:text-lg">
            <Button
              className="h-0 rounded-full p-0 p-4 text-sm"
              variant={`${!inView ? "default" : "outline"}`}
              onClick={funcone}
            >
              Options Trading
            </Button>
            <Button
              className="h-0 rounded-full p-0 p-4 text-sm"
              variant={`${inView ? "default" : "outline"}`}
              onClick={functwo}
            >
              Trading steps
            </Button>
            {/* <button
              className={`rounded-full  border border-white px-3 text-sm lg:text-base ${!inView ? "bg-textwhite text-priblue" : "text-textwhite bg-transparent"}`}
              onClick={funcone}
            >
              Options trading
            </button>
            <button
              className={`rounded-full  border border-white px-3 text-sm lg:text-base ${inView ? "bg-textwhite text-priblue" : "text-textwhite bg-transparent"}`}
              onClick={functwo}
            >
              Trading steps
            </button> */}
          </div>

          <div className="mt-20">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              centeredSlides={true}
              ref={swiperRef}
              navigation={{
                prevEl: ".my-prev-button",
                nextEl: ".my-next-button",
              }}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div>
                  <div className="grid grid-cols-1 text-primary lg:grid-cols-2">
                    <div>
                      <div className="mb-10 flex items-center justify-center lg:hidden lg:justify-end">
                        <Image
                          src="/first.png"
                          width={200}
                          height={200}
                          alt={""}
                        />
                      </div>
                      <div className="text-xl font-semibold uppercase">
                        What is options trading
                      </div>
                      <p className="my-4 text-gray-600">
                        Options trading is when you buy or sell an underlying
                        asset at a pre-negotiated price by a certain future
                        date.
                        <br />
                        <br /> Trading stock options can be complex — even more
                        so than stock trading. When you buy a stock, you just
                        decide how many shares you want, and your broker fills
                        the order at the prevailing market price or a limit
                        price you set. Options trading requires an understanding
                        of advanced strategies, and the process for opening an
                        options trading account includes a few more steps than
                        opening a typical investment account. <br />
                        <br /> “You can use options to speculate and to gamble,
                        but the reality is ... the best use of options is to
                        protect your downside,” he says. &quot;Options are one
                        way to generate income when the markets aren&apos;t
                        going up.” <br />
                        <br /> According to the Options Clearing Corporation,
                        there were 939 million options contracts traded in March
                        2022, up 4.5% compared with March 2021. It was
                        second-highest trading month on record.
                      </p>
                    </div>
                    <div className="hidden items-center justify-center lg:flex lg:justify-end">
                      <Image
                        src="/first.png"
                        width={450}
                        height={450}
                        alt={""}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mb-10 flex items-center justify-center lg:hidden lg:justify-end">
                  <Image src="/second.png" width={160} height={160} alt={""} />
                </div>
                <div ref={ref}>
                  <div className="grid grid-cols-1 text-primary lg:grid-cols-2">
                    <div>
                      <div className="text-xl font-semibold uppercase">
                        How to trade options in four steps
                      </div>
                      <ul className="mt-4 space-y-8 text-base">
                        <li>
                          <span className="font-semibold">
                            1. Investment Objectives
                          </span>
                          <br />
                          <span className="text-gray-600">
                            This usually includes income, growth, capital
                            preservation or speculation.
                          </span>
                        </li>
                        <li>
                          <span className="font-semibold">
                            2. Trading Experience
                          </span>
                          <br />
                          <span className="text-gray-600">
                            The broker will want to know your knowledge of
                            investing, how long you’ve been trading stocks or
                            options, how many trades you make per year and the
                            size of your trades.
                          </span>
                        </li>
                        <li>
                          <span className="font-semibold">
                            3. Personal Finance
                          </span>
                          <br />
                          <span className="text-gray-600">
                            Please have on hand your liquid net worth (or
                            investments easily sold for cash), annual income,
                            total net worth, and employment information.
                          </span>
                        </li>
                        <li>
                          <span className="font-semibold">4. Option Type</span>
                          <br />
                          <span className="text-gray-600">
                            For instance, calls, puts or spreads. And whether
                            they are covered or naked. The seller or writer of
                            options has an obligation to deliver the underlying
                            stock if the option is exercised. If the writer also
                            owns the underlying stock, the option position is
                            covered. If the option position is left unprotected,
                            its naked.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="hidden items-center justify-center lg:flex lg:justify-end">
                      <Image
                        src="/second.png"
                        width={350}
                        height={350}
                        alt={""}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Card>
    </>
  );
}
