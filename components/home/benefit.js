"use client";
import { useRef, useEffect, useState } from "react";
import { Card } from "../ui/card";

export default function Benefit() {
  const swiperRef = useRef();
  const [slidesPerView, setSlidesPerView] = useState(1.2);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1.2); // Small screens: 1 slide
      } else if (width < 1024) {
        setSlidesPerView(1.5); // Medium screens: 1.2 slides
      } else if (width > 1024 && width <= 1440) {
        setSlidesPerView(2.5); // Large screens: 2 slides
      } else if (width > 1440) {
        setSlidesPerView(4);
      }
    };

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView); // Cleanup
  }, []);
  return (
    <>
      <div>
        <div className="pb-12 lg:pb-24">
          <div className="heading-home mb-10">
            {process.env.NEXT_PUBLIC_NAME} trade advantages
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Cardx
              src={
                "https://multicopytrade.com/assets/newfront/images/home/animated-home/advantages/adv-regulations.webp"
              }
              one={"regulations and security of funds"}
              two={
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check />
                    We consist of entities regulated by 11+ regulators across 5
                    continents
                  </li>
                  <li className="flex items-center">
                    <Check />
                    55+ Awards including ‘Best Global Broker 2021 (Finance
                    Magnates)
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Fully segregated client accounts
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Settlement facility for institutional customers, brokers,
                    and banks
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Guaranteed withdrawals of funds within 24-hours{" "}
                  </li>
                </ul>
              }
            />

            <Cardx
              src={
                "https://multicopytrade.com/assets/newfront/images/home/animated-home/advantages/adv-products.webp"
              }
              one={"STATE-OF-THE-ART PRODUCTS"}
              two={
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check />
                    Trade 20,000+ instruments: forex, metals, stocks, indices,
                    commodities, crypto.
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Tightest spreads starting from 0.0 pips on FX and 2 cents on
                    Gold
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Up to 500:1 leverage
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Social trading option
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Free MAM, PAMM, EA, VPS and API
                  </li>
                </ul>
              }
            />

            <Cardx
              src={
                "https://multicopytrade.com/assets/newfront/images/home/animated-home/advantages/adv-platforms.webp"
              }
              one={"CUTTING-EDGE TRADING PLATFORMS"}
              two={
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check />
                    Award winning web platform with instant nano second
                    execution
                  </li>

                  <li className="flex items-center">
                    <Check />
                    State-of-the-art technology providing stable platform and
                    faster execution
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Up to 5 levels of market depth
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Negative balance protection
                  </li>
                  <li className="flex items-center">
                    <Check />
                    No requotes, no rejections and no restrictions on EA
                  </li>
                </ul>
              }
            />

            <Cardx
              src={
                "https://multicopytrade.com/assets/newfront/images/home/animated-home/advantages/adv-services.webp"
              }
              one={"UNPARALLELED FINANCIAL SERVICES"}
              two={
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check />
                    Dedicated multilingual 24/7 customer service
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Trading Credit Lines
                  </li>

                  <li className="flex items-center">
                    <Check />
                    Withdrawals guaranteed within 24 hours with various payment
                    systems
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Unparalleled franchise, partnership and introducing broker
                    offers
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Industry leading 20% Deposit bonus offers
                  </li>
                  <li className="flex items-center">
                    <Check />
                    Swap Free trading
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Cardx({ src, one, two }) {
  return (
    <Card>
      <div className="p-6">
        {/* <img src={src} /> */}
        <div>
          <h1 className="mb-4 text-left font-semibold uppercase">{one}</h1>
        </div>
        <div className="text-left text-gray-600">{two}</div>
      </div>
    </Card>
  );
}

function Check() {
  return (
    <>
      <div className="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-3"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
}
