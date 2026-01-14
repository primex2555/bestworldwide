"use client";

import Image from "next/image";
import { useState } from "react";
import GridContainer from "@/components/gridContainer";
import LoadingSpinner from "@/components/loadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import useData from "@/components/useData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Withdraw() {
  const { dataLoading, data } = useData();
  const [view, setView] = useState(true);
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [showalert, setShowAlert] = useState(false);

  const totaldeposit = data?.transactions?.reduce((x, y) => {
    if (y?.deposit === true) {
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

  const balance = totaldeposit - totalwithdrawal;

  async function Proceed() {
    if (!amount && !address) {
      toast.error("Enter amount and wallet address", {
        duration: 1000,
      });
    } else if (!amount && address) {
      toast.error("Enter an amount", {
        duration: 1000,
      });
    } else if (amount && !address) {
      toast.error("Enter a wallet address", {
        duration: 1000,
      });
    } else if (amount > data.limit) {
      toast.error("Cannot withdraw more than limit", {
        duration: 1000,
      });
      // } else if (amount > balance) {
      //   toast.error("Cannot withdraw more than balance", {
      //     duration: 1000,
      //   });
    } else {
      if (data.allowtransfer === true) {
        setLoading(true);
        const amountdata = {
          name: "Withdraw",
          date: new Date().toISOString().split("T")[0],
          amount: Number(amount),
          deposit: false,
          withdraw: true,
          pending: true,
        };

        const formData = new FormData();
        formData.append("transaction", JSON.stringify(amountdata));

        try {
          const res = await fetch(`/api/withdraw`, {
            method: "POST",
            body: formData,
          });

          if (res.ok) {
            setLoading(false);
            setTimeout(() => {
              setLoading(false);
              toast.success("Request sent", { duration: 6000 });
            }, 2000);
          }
        } catch (error) {
          setLoading(false);
          console.error(error.message);
        }
      } else {
        setShowAlert(true);
      }
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
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <GridContainer>
          {showalert ? (
            <>
              <Alert />
            </>
          ) : (
            <>
              {view ? (
                <>
                  <div className="heading">Request for Withdrawal</div>
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <Cardx
                      one={"USDT (ERC20)"}
                      onClick={() => {
                        setCurrency("USDT (ERC20)");
                        setView(false);
                      }}
                    />
                    <Cardx
                      one={"Ethereum"}
                      onClick={() => {
                        setCurrency("Ethereum");
                        setView(false);
                      }}
                    />
                    <Cardx
                      one={"Bitcoin"}
                      onClick={() => {
                        setCurrency("Bitcoin");
                        setView(false);
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <Payment
                    one={currency}
                    onClick={Proceed}
                    addressChange={(e) => setAddress(e.target.value)}
                    amountChange={(e) => setAmount(e.target.value)}
                    td={totaldeposit}
                    tw={totalwithdrawal}
                  />
                </>
              )}
            </>
          )}
        </GridContainer>
      )}
    </>
  );
}

function Alert() {
  return (
    <>
      <div className="heading">Withdraw funds</div>
      <div className="grid grid-cols-1 space-y-5 md:grid-cols-5 md:space-x-10 md:space-y-0">
        <Card className="col-span-3 p-6">
          <div className="flex items-center justify-center">
            <div>
              <Image src="/an1.webp" width={400} height={400} alt="image" />
              <p className="text-muted-foreground">
                Unable to withdraw, click{" "}
                <a
                  href="/dashboard/support"
                  className="font-medium text-blue-600 underline hover:no-underline"
                >
                  here
                </a>{" "}
                to contact support
              </p>
            </div>
          </div>
        </Card>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}

function Payment({ one, onClick, amountChange, addressChange, td, tw }) {
  return (
    <>
      <div className="heading">Your Payment Method is {one}</div>
      <div className="grid grid-cols-1 space-y-5 md:grid-cols-5 md:space-x-10 md:space-y-0">
        <Card className="col-span-3 p-6">
          <p className="text-priblue mb-5 inline-block rounded-lg bg-[#e8ebfd] px-2 py-1 text-sm font-medium ">
            Account Balance: ${(td - tw).toFixed(2)}
          </p>
          <br />

          <label htmlFor="password" className="font-medium">
            Enter Amount to Withdraw <span className="text-red-500">*</span>
          </label>

          <div className="">
            <Input
              type="number"
              className="w-full"
              placeholder=""
              autoComplete="off"
              onChange={amountChange}
            />
          </div>
          <br />
          <label htmlFor="password" className="font-medium">
            Enter {one} Address <span className="text-red-500">*</span>
          </label>

          <div className="">
            <Input
              type="text"
              className="w-full"
              placeholder=""
              autoComplete="off"
              onChange={addressChange}
            />
          </div>

          <Button onClick={onClick} className="mt-3 w-full">
            Make Request
          </Button>
        </Card>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}

function Cardx({ one, onClick }) {
  return (
    <>
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="inline-block rounded-lg bg-secondary px-4 py-1 text-center text-sm font-medium uppercase">
            {one}
          </h3>
        </div>
        <ul className="space-y-2 ">
          <li className="flex justify-between">
            <span className="font-medium">Minimum Amount</span>
            <span>$1</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Maximum Amount</span>
            <span>$1000000</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Charges Type</span>
            <span>Percentage</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Charges Amount</span>
            <span>0%</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Duration</span>
            <span>Instant</span>
          </li>
        </ul>
        <br />

        <Button type="submit" className="w-full" onClick={onClick}>
          Request Withdrawal
        </Button>
      </Card>
    </>
  );
}
