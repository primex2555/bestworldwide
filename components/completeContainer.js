"use client";
import { Card } from "./ui/card";
import Link from "next/link";

export default function Complete({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <Card className="col-span-3 p-4">
        {children}
        <div className="flex justify-between pt-4">
          <Link href={"/dashboard/invest"}>
            <p className="text-base font-semibold">&#8249; Cancel Order</p>
          </Link>
          <Link href={"/dashboard"}>
            <p className="text-base font-semibold">Back to Dashboard &#8250;</p>
          </Link>
        </div>
      </Card>

      <div className="col-span-2"></div>
    </div>
  );
}
