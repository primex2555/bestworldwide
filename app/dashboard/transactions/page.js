"use client";

import GridContainer from "@/components/gridContainer";
import useData from "@/components/useData";
import LoadingSpinner from "@/components/loadingSpinner";
import { Card } from "@/components/ui/card";

export default function Transactions() {
  const { data, dataLoading } = useData();

  if (dataLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    );
  return (
    <>
      <GridContainer>
        <>
          <div className="heading">Transactions in your account</div>
          <div className="grid grid-cols-1 space-y-5 md:grid-cols-5 md:space-x-10 md:space-y-0">
            <Card className="col-span-3 px-8 pb-4 pt-2">
              {" "}
              {!data?.transactions?.length ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <span>No transaction yet...</span>
                </div>
              ) : (
                <>
                  {data?.transactions
                    ?.map((x, index) => (
                      <div key={index} className="">
                        <div
                          className={`border-b-tertblue text-textwhite flex border-b ${index === data?.transactions?.length - 1 ? "border-none" : "border-b-tertblue border-b"} md:text-md items-center justify-between py-2 text-base`}
                        >
                          <div className="text-left">
                            <p className="font-medium">
                              {x.name + (x.pending ? " (Pending)" : "")}
                            </p>
                            <p className="">{x.date}</p>
                          </div>
                          <div className="text-right">
                            <p
                              className={`${x.deposit ? "font-medium text-green-500" : x.pending ? "font-medium text-yellow-500" : "font-medium text-red-500"}`}
                            >
                              {x.deposit
                                ? "+" + x.amount.toFixed(2)
                                : x.pending
                                  ? (x.deposit ? "+" : "-") +
                                    x.amount.toFixed(2)
                                  : "-" + x.amount.toFixed(2)}
                            </p>
                            <p>{x.amount.toFixed(2)} USD</p>
                          </div>
                        </div>
                      </div>
                    ))
                    .reverse()}
                </>
              )}
            </Card>
            <div className="col-span-2"></div>
          </div>
        </>
      </GridContainer>
    </>
  );
}
