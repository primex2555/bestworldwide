"use client";

import GridContainer from "@/components/gridContainer";
import { useState } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useData from "@/components/useData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Invest() {
  const { dataLoading, data } = useData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [invest, setInvest] = useState({
    standard: "",
    advanced: "",
    nfp: "",
    btc: "",
  });

  function funcStandard() {
    if (invest.standard) {
      setLoading(true);
      setTimeout(() => {
        router.push(`/dashboard/complete/eth?x=${invest.standard}`);
      }, 2000);
    }
  }
  function funcAdvanced() {
    if (invest.advanced) {
      setLoading(true);
      setTimeout(() => {
        router.push(`/dashboard/complete/eth?x=${invest.advanced}`);
      }, 2000);
    }
  }
  function funcNFP() {
    if (invest.nfp) {
      setLoading(true);
      setTimeout(() => {
        router.push(`/dashboard/complete/eth?x=${invest.nfp}`);
      }, 2000);
    }
  }
  function funcBTC() {
    if (invest.btc) {
      setLoading(true);
      setTimeout(() => {
        router.push(`/dashboard/complete/btc?x=${invest.btc}`);
      }, 2000);
    }
  }

  if (dataLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return (
    <>
      <Toaster />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <GridContainer>
          <>
            <div className="heading">Available Packages</div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <Cardx
                one={"standard"}
                two={""}
                three={"500"}
                four={"4"}
                onChange={(e) =>
                  setInvest({
                    ...invest,
                    standard: e.target.value,
                  })
                }
                onClick={funcStandard}
              />
              <Cardx
                one={"advanced"}
                two={""}
                three={"5000"}
                four={"4"}
                onChange={(e) =>
                  setInvest({
                    ...invest,
                    advanced: e.target.value,
                  })
                }
                onClick={funcAdvanced}
              />
              <Cardx
                one={"nfp"}
                two={""}
                three={"50,000"}
                four={"4"}
                onChange={(e) =>
                  setInvest({
                    ...invest,
                    nfp: e.target.value,
                  })
                }
                onClick={funcNFP}
              />
              <Cardx
                one={"btc"}
                two={""}
                three={"100,000"}
                four={"7"}
                onChange={(e) =>
                  setInvest({
                    ...invest,
                    btc: e.target.value,
                  })
                }
                onClick={funcBTC}
              />
            </div>
          </>
        </GridContainer>
      )}
    </>
  );
}

function Cardx({ one, two, three, four, onClick, onChange }) {
  return (
    <>
      <Card className="p-6">
        <div className="">
          <h3 className="inline-block rounded-lg bg-secondary px-4 py-1 text-center text-sm font-medium uppercase">
            {one}
          </h3>
          <p className="py-8 text-left text-lg">
            $<span className="rounded-md text-center text-6xl">0</span>
          </p>
        </div>
        <ul className="space-y-2 ">
          <li className="flex justify-between">
            <span className="font-medium">Minimum Possible Deposit</span>
            <span>${three}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Maximum Possible Deposit</span>
            <span>$0</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Minimum Return</span>
            <span>$0</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Maximum Return</span>
            <span>$0</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Gift Bonus</span>
            <span>$0</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Duration</span>
            <span>{four}</span>
          </li>
        </ul>
        <br />
        <p>Amount to Invest - ($0 default)</p>
        <div className="">
          <Input
            type="number"
            autoComplete="off"
            min={three}
            onChange={onChange}
          />
        </div>
        <Button type="submit" className="mt-2 w-full" onClick={onClick}>
          Join Plan
        </Button>
      </Card>
    </>
  );
}
