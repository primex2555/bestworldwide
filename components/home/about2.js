import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function About2() {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-y-2 px-5 py-12 lg:grid-cols-7 lg:gap-x-6 lg:space-y-0 lg:p-24">
        <div className="col-span-4 space-y-4">
          <div className="heading-home">Earn like top earners</div>
          {/* <img
            src="/aboutmain.jpeg"
            alt="aboutmain.jpeg"
            className="mb-5 overflow-clip rounded-lg md:m-5 md:hidden"
          /> */}
          <p className="my-4 text-base text-gray-600">
            Social trading can be extremely beneficial when it comes to trading
            financial markets. Experienced traders can earn additional income by
            having followers on our platform that replicate their trading
            strategy. On top of their own trading profits, they can receive a
            commission from the followers that are replicating their trades.
            Beginners can mimic the trades of more experienced traders, having
            the chance to learn and benefit from their success. They only have
            to choose their favorite trader to copy on our platform and
            automatically copy their trades on our platform.
          </p>
          <div className="text-base">
            <ul className="mr-2 space-y-3 font-semibold">
              <li className="flex items-center gap-x-2">
                <Check />
                Copy successful traders from around the world
              </li>
              <li className="flex items-center gap-x-2">
                <Check />
                Hassle-free investing service & portfolio management
              </li>
              <li className="flex items-center gap-x-2">
                <Check />
                Highly rated 24/7 customer service
              </li>
              <li className="flex items-center gap-x-2">
                <Check />
                Globally regulated & licensed
              </li>
            </ul>
          </div>
          <br />
          <Button asChild className="h-10">
            <Link href={"/register"}>Join us</Link>
          </Button>
        </div>

        <div
          className="col-span-3 m-5 hidden h-[200px] rounded-lg bg-cover text-center md:text-left lg:inline-block lg:h-full"
          style={{ backgroundImage: `url("/about1.png")` }}
        ></div>
        {/* <div className="inline-block lg:hidden">
          <img src="/about1.png" alt="about1" className="size-18" />
        </div> */}
      </div>
    </>
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
