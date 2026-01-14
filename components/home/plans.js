"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Plans({ bg }) {
  const [standard, setStandard] = useState(true);
  const [advanced, setAdvanced] = useState(false);
  const [NFP, setNFP] = useState(false);
  const [BTC, setBTC] = useState(false);

  function viewStandard() {
    setStandard(true);
    setAdvanced(false);
    setNFP(false);
    setBTC(false);
  }

  function viewAdvanced() {
    setStandard(false);
    setAdvanced(true);
    setNFP(false);
    setBTC(false);
  }

  function viewNFP() {
    setStandard(false);
    setAdvanced(false);
    setNFP(true);
    setBTC(false);
  }

  function viewBTC() {
    setStandard(false);
    setAdvanced(false);
    setNFP(false);
    setBTC(true);
  }

  return (
    <>
      <div className="px-5 py-12 lg:p-20" id="plans">
        <div className="heading-home text-center">Plans</div>
        <div className="item-center mt-4 flex justify-center space-x-2 pb-4 text-sm text-primary">
          <Button
            // className={`rounded-full border border-secondary px-3 text-sm ${standard ? "bg-secondary text-primary" : "border bg-transparent"}`}
            className="h-0 rounded-full p-0 p-4 text-sm"
            variant={`${standard ? "default" : "outline"}`}
            onClick={viewStandard}
          >
            Standard
          </Button>
          <Button
            // className={`rounded-full border border-secondary px-3 text-sm ${advanced ? "bg-secondary text-primary" : "border bg-transparent"}`}
            className="h-0 rounded-full p-0 p-4 text-sm"
            variant={`${advanced ? "default" : "outline"}`}
            onClick={viewAdvanced}
          >
            Advanced
          </Button>
          <Button
            // className={`rounded-full border border-secondary px-3 text-sm ${NFP ? "bg-secondary text-primary" : "border bg-transparent"}`}
            className="h-0 rounded-full p-0 p-4 text-sm"
            variant={`${NFP ? "default" : "outline"}`}
            onClick={viewNFP}
          >
            NFP
          </Button>
          <Button
            // className={`rounded-full  border border-secondary px-3 text-sm ${BTC ? "bg-secondary text-primary" : "border bg-transparent"}`}
            className="h-0 rounded-full p-0 p-4 text-sm"
            variant={`${BTC ? "default" : "outline"}`}
            onClick={viewBTC}
          >
            BTC
          </Button>
        </div>
        <div className="mt-12">
          {!standard ? (
            ""
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <Cardx
                one={"corporate plan"}
                two={"40%-45%"}
                three={"minimum - $50,000"}
                four={"maximum - UNLIMITED"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
              <Cardx
                one={"ultimate plan"}
                two={"30%-40%"}
                three={"minimum - $20,000"}
                four={"maximum - $49,999"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
              <Cardx
                one={"premium plan"}
                two={"30%-35%"}
                three={"minimum - $5,000"}
                four={"maximum - $9,999"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
              <Cardx
                one={"standard plan"}
                two={"20%-25%"}
                three={"minimum - $3,000"}
                four={"maximum - $4,999"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
            </div>
          )}
          {!advanced ? (
            ""
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <Cardx
                one={"corporate plan"}
                two={"70%-80%"}
                three={"minimum - $100,000"}
                four={"maximum - UNLIMITED"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />

              <Cardx
                one={"ultimate plan"}
                two={"60%-70%"}
                three={"minimum - $50,000"}
                four={"maximum - $99,999"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
              <Cardx
                one={"premium plan"}
                two={"40%-45%"}
                three={"minimum - $10,000"}
                four={"maximum - $19,999"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
              <Cardx
                one={"standard plan"}
                two={"20%-25%"}
                three={"minimum - $3,000"}
                four={"maximum - $4,999"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
            </div>
          )}
          {!NFP ? (
            ""
          ) : (
            <div className="grid grid-cols-1 gap-8 md:mx-40 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              <Cardx
                one={"ultimate plan"}
                two={"100%-124%"}
                three={"minimum - $150,000"}
                four={"maximum - UNLIMITED"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
              <Cardx
                one={"starter plan"}
                two={"40%-45%"}
                three={"minimum - $50,000"}
                four={"maximum - $99,999"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
              <Cardx
                one={"premium plan"}
                two={"150%"}
                three={"minimum - $100,000"}
                four={"maximum - $149,999"}
                five={"10% Trade Commission"}
                six={"24/7 active support"}
              />
            </div>
          )}
          {!BTC ? (
            ""
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <Cardx
                one={"pro crypto"}
                two={"90%-95%"}
                three={"30+ BTC"}
                four={"10% Trade commission"}
                five={"24/7 Trade Support"}
              />
              <Cardx
                one={"standard crypto"}
                two={"70%-75%"}
                three={"5-14.9 BTC"}
                four={"10% Trade Commission"}
                five={"24/7 active support"}
              />
              <Cardx
                one={"premium crypto"}
                two={"80%-85%"}
                three={"15-29.9 BTC"}
                four={"10% Trade Commission"}
                five={"24/7 active support"}
              />
              <Cardx
                one={"basic crypto"}
                two={"65%-70%"}
                three={"1-1.5 BTC"}
                four={"10% Trade Commission"}
                five={"24/7 active support"}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Cardx({ one, two, three, four, five, six }) {
  return (
    <>
      <Card className={`light:bg-secondary space-y-2 p-6 text-center`}>
        <h2 className="pb-4 text-lg font-semibold uppercase">{one}</h2>
        <p className="text-gray-600">{two} PIPS</p>
        <ul className="space-y-2 text-base text-gray-600">
          <li>{three}</li>
          <li>{four}</li>
          <li>{five}</li>
          <li>{six}</li>
        </ul>

        <div className="pt-6">
          <Button asChild variant="outline">
            <Link href="/login">Get started</Link>
          </Button>
        </div>
      </Card>
    </>
  );
}
