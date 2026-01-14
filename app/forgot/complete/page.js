"use client";
import LoadingSpinner from "@/components/loadingSpinner";
import { useState, useEffect } from "react";
import Form from "@/components/formContainer";
import SearchParams from "@/components/searchParams";
import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CompleteForgot() {
  const [loading, setLoading] = useState(false);
  const urlx = (
    <Suspense>
      <SearchParams />
    </Suspense>
  );
  const [divAppearance, setDivAppearance] = useState();

  async function validate() {
    if (divAppearance) {
      setLoading(true);
      const formData = new FormData();
      formData.append("random", String(divApperance));

      try {
        const res = await fetch(`/api/forgot`, {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          const cdata = await res.json();
          if (cdata.error) {
            setLoading(false);
            toast.error("Password change, failed", {
              duration: 4000,
            });
          } else {
            setLoading(false);
            toast.success("Password changed, sucessfully", {
              duration: 4000,
            });
          }
        }
      } catch (error) {
        setLoading(false);
        console.error(error.message);
        toast.error("Invalid login details", {
          duration: 4000,
        });
      }
    }
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Form text1={"Reset Password"} text2={"Create new Password"}>
          <div className="center-form">
            <span
              ref={(el) => setDivAppearance(el?.innerText)}
              className="hidden"
            >
              {urlx}
            </span>

            <Input
              type="Password"
              name="npassword"
              className="my-4"
              placeholder="New Password"
              autoComplete="off"
            />

            <Input
              type="Password"
              name="cpassword"
              className="mb-4"
              placeholder="Confirm Password"
              autoComplete="off"
            />

            <div className="">
              <Button type="submit" className="w-full" onClick={validate}>
                Submit
              </Button>
              <p className="mt-4 text-center text-sm">
                Back to{" "}
                <a className="underline" href="/login">
                  Login
                </a>
              </p>
            </div>
          </div>
        </Form>
      )}
    </>
  );
}
