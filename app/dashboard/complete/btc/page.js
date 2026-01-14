"use client";

import GridContainer from "@/components/gridContainer";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import SearchParams from "@/components/searchParams";
import { Suspense } from "react";
import { Storage } from "megajs";
import LoadingSpinner from "@/components/loadingSpinner";
import Complete from "@/components/completeContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BTC() {
  const divRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [btc, setBtc] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [copyText, setCopyText] = useState(
    "15mDGMyMMGf63txmB8XrRRmTRQdW7f2Pi6",
  );
  const [imageData, setImageData] = useState();
  const [divAppearance, setDivApperance] = useState("");

  const amount = (
    <Suspense>
      <SearchParams />
    </Suspense>
  );

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/bitcoin")
      .then((response) => response.json())
      .then((data) => setBtc(data.data.priceUsd))
      .catch((error) => console.error(error));
  }, []);

  async function copyToClipboard() {
    toast.success("Copied!", { duration: 4000 });
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(copyText);
    }

    setIsCopied(true);
  }

  const handleFormSubmit = async () => {
    setLoading(true);
    if (imageData) {
      const storage = await new Storage({
        email: "sofato6367@jahsec.com",
        password: "Alphatradersx1234",
      }).ready;

      const bytes = await imageData.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const send = await storage.upload(imageData.name, buffer).complete;
      const link = await send.link();

      const formData = new FormData();
      formData.append("id", data?._id);
      formData.append("link", link);

      try {
        const res = await fetch(`/api/proofofpayment`, {
          method: "POST",
          body: formData,
        });

        if (res.error) {
          setLoading(false);
          toast.success("Not submitted, try again", { duration: 4000 });
        } else {
          setLoading(false);
          toast.success("Submitted", { duration: 4000 });
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <GridContainer>
          <Complete>
            <div className="text-center">
              <div className="align-items-center flex justify-center py-2">
                <div className="p-2">
                  <Image
                    src={"/btcqr.png"}
                    width={200}
                    height={200}
                    alt={"btcqr.png"}
                  />
                </div>
              </div>
              <p className="pb-4 text-2xl font-bold">
                <span ref={(el) => setDivApperance(el?.innerText)}>
                  {amount}
                </span>{" "}
                USD
              </p>
              <p className="pb-4 text-base">{divAppearance / btc} BTC</p>
              <p className="text-base font-bold">BITCOIN WALLET ADDRESS</p>

              <div className="my-2 flex items-center gap-x-2">
                <Input
                  type="text"
                  value={" 15mDGMyMMGf63txmB8XrRRmTRQdW7f2Pi6"}
                  disabled
                />

                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyToClipboard}
                  className="text-muted-foreground"
                >
                  {isCopied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                      />
                    </svg>
                  )}
                </Button>
              </div>
              <br />
              <div className="mb-1 uppercase">payment proof</div>
              <div className="mb-4 flex justify-center gap-x-1 text-center text-base">
                <Input
                  type="file"
                  className="mb-1 w-[38%] text-center"
                  accept="image/*"
                  onChange={(e) => setImageData(e.target.files[0])}
                />
                <Button onClick={handleFormSubmit}>Submit</Button>
              </div>
            </div>
          </Complete>
        </GridContainer>
      )}
    </>
  );
}
