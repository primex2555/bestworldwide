"use client";
import { EconomicCalendar } from "react-ts-tradingview-widgets";
import OtherContainer from "@/components/otherContainer";

export default function News() {
  return (
    <>
      <OtherContainer src={"/news.jpg"} alt={"news"}>
        <h1 className="heading-home mb-4">News Insight</h1>
        <p className="mx-5 mb-6 text-sm md:mx-10 md:text-base">
          The News Insight tracks global economic events, announcements, and
          market-impacting news, updating automatically with new data.
          {/* The Economic Calendar offers general, informative content only */}
        </p>
        <EconomicCalendar width="100%" />
      </OtherContainer>
    </>
  );
}
