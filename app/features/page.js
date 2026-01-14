"use client";
import Nav from "@/components/home/nav";
import Footer from "@/components/home/footer";

export default function Features() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-secblue py-40 text-lg">
        <div className="space-y-20 p-8 text-white">
          <div>
            <h1 className="mb-4 text-3xl uppercase text-textgold lg:text-4xl">
              Discover What AlphaTraders Can Do for You
            </h1>
            <p>
              A suite of features designed to simplify and enhance your
              investment experience
            </p>
          </div>
          <div className="md:grid:cols-2 grid grid-cols-1">
            <div className="col-span-1">
              <h1 className="mb-4 text-3xl uppercase text-textgold lg:text-4xl">
                Personalized Portfolio Management
              </h1>
              <p>
                Create and manage your personalized investment portfolio with
                ease. Our advanced algorithms and expert insights help you make
                informed decisions.
              </p>
              <ul>
                <li>Customizable investment strategies</li>{" "}
                <li>Automated portfolio rebalancing</li>
                <li>Performance tracking and reporting</li>
              </ul>
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="md:grid:cols-2 grid grid-cols-1">
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <h1 className="mb-4 text-3xl uppercase text-textgold lg:text-4xl">
                Real-time Market Data
              </h1>
              <p>
                Stay ahead of the market with up-to-the-minute data on stocks,
                bonds, and other investments. Access charts, news, and analysis
                to make timely decisions.
              </p>
              <ul>
                <li>Live updates on market trends</li>
                <li>Comprehensive data on various asset classes</li>
                <li>Interactive charts and analysis tools</li>
              </ul>
            </div>
          </div>
          <div className="md:grid:cols-2 grid grid-cols-1">
            <div className="col-span-1">
              {" "}
              <h1 className="mb-4 text-3xl uppercase text-textgold lg:text-4xl">
                Secure Transactions
              </h1>
              <p>
                Invest with peace of mind. MultiTrade employs state-of-the-art
                security measures to protect your personal and financial
                information.
              </p>
              <ul>
                <li>End-to-end encryption</li>
                <li>Secure authentication processes</li>
                <li>Regular security audits</li>
              </ul>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
