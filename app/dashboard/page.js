"use client";
import useData from "@/components/useData";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { ForexCrossRates } from "react-ts-tradingview-widgets";
import LoadingSpinner from "@/components/loadingSpinner";
import GridContainer from "@/components/gridContainer";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function DashboardHome() {
  const { symbol, rate, error, data, dataLoading } = useData();

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/bitcoin")
      .then((response) => response.json())
      .then((data) => setBtc(data.data.priceUsd))
      .catch((error) => console.error(error));
  }, [data]);

  const [btc, setBtc] = useState("");

  // const totalreferralbonus = data?.transactions?.reduce((x, y) => {
  //   if (y?.referralbonus === true) {
  //     return x + y.amount;
  //   }
  //   return x;
  // }, 0);

  const totalprofit = data?.transactions?.reduce((x, y) => {
    if (y?.name === "Profit") {
      return x + y.amount;
    }
    return x;
  }, 0);

  const totaldeposit = data?.transactions?.reduce((x, y) => {
    if (y?.name === "Deposit") {
      return x + y.amount;
    }
    return x;
  }, 0);

  const totalwithdrawal = data?.transactions?.reduce((x, y) => {
    if (y?.withdraw === true) {
      return x + y.amount;
    }
    return x;
  }, 0);

  const balance = totaldeposit - totalwithdrawal + totalprofit;

  if (dataLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return (
    <>
      <GridContainer>
        <div>
          <div className="heading">
            Welcome,{" "}
            <span className="text-xl">
              {data?.firstname + " " + data?.lastname}
            </span>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* <Cardx
              color={"#6861CE"}
              svg={<span dangerouslySetInnerHTML={{ __html: symbol }} />}
              text1={
                <>
                  <span dangerouslySetInnerHTML={{ __html: symbol }} />
                  {Number(balance).toFixed(2)}
                </>
              }
              text2={"Available Balance"}
            /> */}
            <Cardx
              color={"#6861CE"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              text1={"Available Balance (USD)"}
              text2={"$" + Number(balance).toFixed(2)}
              text3={
                <>
                  <span dangerouslySetInnerHTML={{ __html: symbol }} />
                  {Number(balance * rate).toFixed(2)}
                </>
              }
            />

            <Cardx
              color={"#ef4444"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              text1={"Total profit"}
              text2={
                balance === 0
                  ? "$" + balance.toFixed(2)
                  : "$" + totalprofit?.toFixed(2)
              }
              text3={
                <>
                  <span dangerouslySetInnerHTML={{ __html: symbol }} />
                  {(balance === 0
                    ? balance * rate
                    : totalprofit * rate
                  ).toFixed(2)}
                </>
              }
            />
            <Cardx
              color={"#31CE36"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l7.22 7.22H6.75a.75.75 0 0 0 0 1.5h7.5a.747.747 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v5.69L6.28 5.22Z" />
                </svg>
              }
              text1={"Total Deposit"}
              text2={
                balance === 0
                  ? "$" + balance.toFixed(2)
                  : "$" + totaldeposit?.toFixed(2)
              }
              text3={
                <>
                  <span dangerouslySetInnerHTML={{ __html: symbol }} />
                  {(balance === 0
                    ? balance * rate
                    : totaldeposit * rate
                  ).toFixed(2)}
                </>
              }
            />
            <Cardx
              color={"#6861CE"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              text1={"Total Withdrawal"}
              text2={"$" + totalwithdrawal?.toFixed(2)}
              text3={
                <>
                  <span dangerouslySetInnerHTML={{ __html: symbol }} />
                  {Number(totalwithdrawal * rate)?.toFixed(2)}
                </>
              }
            />
            <Cardx
              color={"#48ABF7"}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
                </svg>
              }
              text1={"Available balance (BTC)"}
              text2={
                balance === 0
                  ? balance.toFixed(2) / btc
                  : Number(totaldeposit / btc)?.toFixed(6) || 0
              }
              text3={"$" + balance.toFixed(2)}
            />
          </div>
          <div className="z-0">
            <AdvancedRealTimeChart
              width="100%"
              height={500}
              theme="dark"
            ></AdvancedRealTimeChart>
          </div>
          <br />
          <ForexCrossRates
            width="100%"
            height={500}
            colorTheme="dark"
          ></ForexCrossRates>
        </div>
      </GridContainer>
      {/* )} */}
    </>
  );
}

function Cardx({ svg, text1, text2, text3, color }) {
  return (
    <>
      <Card className="p-3">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="text-sm font-medium">{text1}</div>
          <div
            className="flex h-7 w-7 items-center justify-center rounded-md text-secondary"
            style={{ backgroundColor: `${color}` }}
          >
            {svg}
          </div>
        </div>

        <div>
          <div className="overflow-hidden text-ellipsis text-nowrap text-sm">
            <p className="text-2xl font-semibold">{text2}</p>
            <p className="text-[13px] text-muted-foreground">{text3}</p>
          </div>
        </div>
      </Card>
    </>
  );
}
