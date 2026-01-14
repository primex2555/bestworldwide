"use client";
import { useState } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import useData from "@/components/useData";

export default function ConfirmPassword() {
  const { dataLoading, data } = useData();
  const router = useRouter();
  const [first, setFirst] = useState(false);
  const [pass, setPass] = useState("");

  function runFirst() {
    if (data?.password === pass) {
      setFirst(true);
      router.push("/dashboard/withdraw");
    } else {
      toast.error("Passsword error", { duration: 3000 });
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
      {first ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <div className="h-screen bg-priblue text-textwhite">
            <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8">
              <div className="rounded-lg border border-tertblue bg-secblue py-10 text-textwhite">
                <div className="mx-auto max-w-sm text-center">
                  <p className="px-10 text-sm text-textwhite">
                    This is a secure area. Please confirm your password before
                    continuing.
                  </p>
                </div>

                <div className="m-auto mb-0 mt-8 w-[80%] space-y-4">
                  <div>
                    <label htmlFor="password" className="font-semibold">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type="password"
                        className="input-dash"
                        placeholder="Enter password"
                        autoComplete="off"
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>
                    <button onClick={runFirst} className="btn-dash mt-3 w-full">
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        // <div className="heading">Withdraw</div>
      )}
      {/* <GridContainer>
       
      </GridContainer> */}
    </>
  );
}
