"use client";

import Nav from "@/components/home/nav";
import Hero from "@/components/home/hero";
import About1 from "@/components/home/about1";
import About2 from "@/components/home/about2";
import CopyTrade from "@/components/home/copytrade";
import Top from "@/components/home/top";
import OptionsTrading from "@/components/home/optionstrading";
import Plans from "@/components/home/plans";
import Stats from "@/components/home/stats";
import Steps from "@/components/home/steps";
import Liquidity from "@/components/home/liqudity";
import WhatPeople from "@/components/home/whatpeople";
import Footer from "@/components/home/footer";
// import Video from "@/components/home/video";
import Animate from "@/components/animate";


export default function Home() {
  return (
    <>
      <div className="bg-priblue">
        {/* <TawkMessengerReact
          propertyId="66678b51981b6c56477bbada"
          widgetId="1i027gec3"
        /> */}

        <Animate>
          <Hero />
        </Animate>
        <Animate>
          <About1 />
        </Animate>
        <Animate>
          <About2 />
        </Animate>
        <Animate>
          <CopyTrade />
        </Animate>
        <Animate>
          <Top />
        </Animate>
        <Animate>
          <OptionsTrading />
        </Animate>

        <Animate>
          <Plans />
        </Animate>
        <Animate>
          <Stats />
        </Animate>
        <Animate>
          <Steps />
        </Animate>
        {/* <Animate>
          <Benefit />
        </Animate> */}

        <Animate>
          <Liquidity />
        </Animate>
        <Animate>
          <WhatPeople />
        </Animate>
        <Footer />
      </div>
    </>
  );
}
