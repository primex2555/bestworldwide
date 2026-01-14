"use client";

import { SingleTicker } from "react-ts-tradingview-widgets";
import Marquee from "react-fast-marquee";

export default function Top() {
  const pairs = [
    "OANDA:XAUUSD",
    "COINBASE:BTCUSD",
    "BINANCE:BTCUSDT",
    "AMEX:SPY",
    "FXCM:EURUSD",
    "BITSTAMP:BTCUSD",
    "TVC:DXY",
    "NASDAQ:TSLA",
    "SP:SPX",
    "CME:ES",
    "CME:EQ",
    "NASDAQ:NVDA",
  ];
  return (
    <>
      <div className="bg-priblue h-full w-full px-5 py-10  lg:py-24">
        {/* <div className="heading-home mb-10 text-center">
          Trade our top performing products
        </div> */}
        <Marquee>
          <div className="flex items-center justify-center ">
            {pairs.map((x) => (
              <div
                style={{ pointerEvents: "none" }}
                className="bg-secblue mr-4"
                key={x}
              >
                <SingleTicker
                  symbol={x}
                  // isTransparent="true"
                  colorTheme="dark"
                ></SingleTicker>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}
