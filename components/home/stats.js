"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Card } from "../ui/card";

export default function Stats() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <>
      <div className="h-full w-full">
        <Card
          className="light:border-x-0 flex items-center justify-center rounded-none bg-secondary px-5 py-12 dark:border-0 lg:p-24"
          ref={ref}
        >
          <div className="grid grid-cols-1 space-y-20 lg:grid-cols-4 lg:space-x-20 lg:space-y-0">
            <div className="text-center">
              <p className="text-textgold text-4xl uppercase lg:text-4xl">
                {inView}
                <CountUp start={0} end={1000000} duration={4} />+
              </p>
              <span className="md:text-md text-sm uppercase text-gray-600">
                {process.env.NEXT_PUBLIC_NAME} TRADE CLIENTS
              </span>
            </div>
            <div className="text-center">
              <p className="text-textgold text-4xl uppercase lg:text-4xl">
                <CountUp start={0} end={20000} duration={5} />+
              </p>
              <span className="md:text-md text-sm uppercase text-gray-600">
                TRADING INSTRUMENTS
              </span>
            </div>
            <div className="text-center">
              <p className="text-textgold text-4xl uppercase lg:text-4xl">
                <CountUp start={0} end={30000} duration={6} />+
              </p>
              <span className="md:text-md text-sm uppercase text-gray-600">
                INTRODUCING BROKERS
              </span>
            </div>
            <div className="text-center">
              <p className="text-textgold text-4xl uppercase lg:text-4xl">
                <CountUp start={0} end={20} duration={7} />+
              </p>
              <span className="md:text-md text-sm uppercase text-gray-600">
                OFFICES & BRANCHES
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
