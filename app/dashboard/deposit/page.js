"use client";
import GridContainer from "@/components/gridContainer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/loadingSpinner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Deposit() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState();
  const [usdt, setUsdt] = useState(false);
  const [eth, setEth] = useState(false);
  const [btc, setBtc] = useState(false);

  function Proceed() {
    if (currency === "usdt") {
      if (amount) {
        setLoading(true);
        router.push(`/dashboard/complete/usdt?x=${amount}`);
      }
    } else if (currency === "eth") {
      if (amount) {
        setLoading(true);
        router.push(`/dashboard/complete/eth?x=${amount}`);
      }
    } else if (currency === "btc") {
      if (amount) {
        setLoading(true);
        router.push(`/dashboard/complete/btc?x=${amount}`);
      }
    }
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <GridContainer>
          <div className="heading">Fund your account</div>
          <div className="grid grid-cols-1 space-y-5 md:grid-cols-5 md:space-x-10 md:space-y-0">
            {!complete ? (
              <>
                <Card className="col-span-3 p-6">
                  <div>
                    <label>
                      Enter amount<span className="text-red-400">*</span>
                    </label>

                    <div className="">
                      <Input
                        type="number"
                        autoComplete="off"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="mb-1 mt-8 text-lg font-semibold">
                      Choose method of payment below
                    </h1>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      <div
                        className={`cursor-pointer rounded-md border p-5 ${usdt ? "border-2 border-primary" : ""}`}
                        onClick={() => {
                          setCurrency("usdt");
                          setUsdt(!usdt);
                          setEth(false);
                          setBtc(false);
                        }}
                      >
                        <div></div>
                        <div className="">USDT (ERC20)</div>
                      </div>
                      <div
                        className={`cursor-pointer rounded-md border p-5 ${eth ? "border-2 border-primary" : ""}`}
                        onClick={() => {
                          setCurrency("eth");
                          setEth(!eth);
                          setUsdt(false);
                          setBtc(false);
                        }}
                      >
                        <div></div>
                        <div>Ethereum</div>
                      </div>
                      <div
                        className={`cursor-pointer rounded-md border p-5 ${btc ? "border-2 border-primary" : ""}`}
                        onClick={() => {
                          setCurrency("btc");
                          setBtc(!btc);
                          setUsdt(false);
                          setEth(false);
                        }}
                      >
                        <div></div>
                        <div>Bitcoin</div>
                      </div>
                    </div>
                    <Button className="mt-4 w-full" onClick={Proceed}>
                      Proceed to payment
                    </Button>
                  </div>
                </Card>
                <div className="col-span-2"></div>
              </>
            ) : (
              <></>
            )}
          </div>
        </GridContainer>
      )}
    </>
  );
}
