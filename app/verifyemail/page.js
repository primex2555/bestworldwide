"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LoadingSpinner from "@/components/loadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import { Suspense } from "react";

// Separate component to handle the search params logic
function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [ok, setOk] = useState(false);
  const [text, setText] = useState("Your email has been verified click");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const verifyToken = async () => {
      try {
        const formData = new FormData();
        formData.append("token", String(token));
        const res = await fetch("/api/login/verify", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          setOk(true);
          toast.error("Verification failed");
        } else if (res.ok) {
          const cdata = await res.json();
          if (cdata.message === "User has already been verified") {
            setOk(true);
            setText("Your email has already been verified click");
          } else if (cdata.error) {
            router.push("/login");
          }
        }
      } catch (error) {
        router.push("/login");
      }
    };

    verifyToken();
  }, [router, searchParams]);

  if (!ok) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen items-center justify-center bg-secondary">
        <Image src={"/ok.gif"} alt="ok" width={100} height={100} />
        <p className="text-muted-foreground">
          {text} <br />
          <Link
            href={"/login"}
            className="text-primary underline hover:no-underline"
          >
            here
          </Link>{" "}
          to login
        </p>
      </div>
    </>
  );
}

// Main component that wraps the content in Suspense
export default function VerifyEmail() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <VerifyEmailContent />
    </Suspense>
  );
}
