"use client";
import GridContainer from "@/components/gridContainer";
import toast, { Toaster } from "react-hot-toast";
import useData from "@/components/useData";
import LoadingSpinner from "@/components/loadingSpinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Refferal() {
  const { dataLoading, data } = useData();
  async function copyToClipboard() {
    toast.success("Copied!", { duration: 4000 });
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(
        "www.alphatradersx.com/register?x=" + data?.referralID,
      );
    }
    setIsCopied(true);
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
      <GridContainer>
        <div className="heading">Referral</div>
        <div className="grid grid-cols-1 space-y-5 md:grid-cols-5  md:space-y-0">
          <Card className="col-span-3 mb-2 p-6 lg:mb-8">
            <p className="mb-2 text-xl font-semibold">
              Get $100 for every person you refer
            </p>
            <p className="mb-4">
              Make money while helping others! Earn $100 for every friend you
              introduce to our amazing platform.
            </p>

            <div>
              <label className="text-textwhite mb-4 font-semibold">
                Share your unique Referral Link:
              </label>

              <div className="flex items-center gap-x-2">
                <Input
                  type="text"
                  value={
                    `www.${process.env.NEXT_PUBLIC_DOMAIN_NAME}.com/register?x=` +
                    data?.referralID
                  }
                  disabled
                />

                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyToClipboard}
                  className="text-muted-foreground"
                >
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
                </Button>
              </div>
            </div>
          </Card>

          <Card className="col-span-3 p-6">
            {!data?.referrals?.length ? (
              <div className="flex flex-col items-center justify-center py-20">
                <span>You have no referral yet...</span>
              </div>
            ) : (
              <>
                <p className="text-semibold text-xl font-medium">
                  Your Referrals
                </p>
                {data?.refferals
                  ?.map((x, index) => (
                    <div key={index} className="">
                      <div
                        className={`border-b-tertblue text-textwhite flex border-b ${index === data?.referrals.length - 1 ? "border-none " : "border-b-tertblue border-b"} md:text-md items-center justify-between py-2 text-base`}
                      >
                        <div className="text-left">
                          <p className="font-medium">{x.username}</p>
                        </div>
                        <div className="text-right">
                          <p>{x.date}</p>
                        </div>
                      </div>
                    </div>
                  ))
                  .reverse()}
              </>
            )}
          </Card>
          <div></div>
        </div>
      </GridContainer>
    </>
  );
}
