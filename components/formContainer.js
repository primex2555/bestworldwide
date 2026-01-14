"use client";

import Logo from "./logo";
import { Import } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Form({ text1, text2, text3, children }) {
  return (
    <div className="min-h-screen bg-secondary dark:bg-transparent">
      <div className="mx-auto max-w-md overflow-y-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">{text1}</CardTitle>
            <CardDescription>
              {text2} {""} {text3}
            </CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
