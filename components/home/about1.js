"use client";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function About1() {
  const random = Math.floor(Math.random() * (1 - 50 + 1)) + 1;
  const arrassets = [
    "Copy Trading",
    "Forex",
    "Crypto Currencies",
    "Stocks",
    "Shares",
    "Real Estate",
    "NFP",
  ];

  // const [randomSources, setRandomSources] = useState([]);

  // useEffect(() => {
  //   const shuffledSources = srcValues.sort(() => Math.random() - 0.5);
  //   setRandomSources(shuffledSources);
  // }, []);

  return (
    <Card className="rounded-none border-x-0 bg-secondary dark:border-0 dark:bg-transparent">
      <div>
        <TickerTape
          colorTheme="dark"
          width="100%"
          // isTransparent="true"
        ></TickerTape>
      </div>
      <div
        className="grid grid-cols-1 bg-secondary px-5 py-12 dark:bg-transparent md:grid-cols-2 lg:grid-cols-8 lg:gap-x-8 lg:p-24"
        id="about"
      >
        <div className="col-span-4">
          <div className="heading-home">
            Invest like {process.env.NEXT_PUBLIC_NAME} top Investors
          </div>
          <p className="my-4 text-gray-600">
            Replicate the investment moves of other traders in real time,
            automatically. Social trading can be extremely beneficial when it
            comes to trading financial markets.
            <br />
            We put your investments in new highly remunerative innovative
            projects, which offers great returns along. Today our company has a
            professional team to develop a business..
          </p>
        </div>

        <div
          className="col-span-2 rounded-lg bg-contain bg-no-repeat md:inline-block md:text-left lg:m-0"
          style={{ backgroundImage: `url("/about0.png")` }}
        ></div>

        <div className="col-span-2 lg:pl-0">
          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            {arrassets.map((x) => (
              <Button key={x} variant="outline">
                {x}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
