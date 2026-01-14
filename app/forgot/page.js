"use client";
import { useState } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/formContainer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Forgot() {
  const [loading, setLoading] = useState();
  const [email, setEmail] = useState(false);

  async function funcProceed() {
    if (email) {
      setLoading(true);
      const formData = new FormData();
      formData.append("email", data.email);
      try {
        const res = await fetch(`/api/email/forgot`, {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          const cdata = await res.json();
          if (cdata.error === "Email not found") {
            setLoading(false);
            toast.error(cdata.error, {
              duration: 4000,
            });
          } else if (cdata.error === "Email not sent") {
            setLoading(false);
            toast.error(cdata.error, {
              duration: 4000,
            });
          } else {
            setLoading(false);
            toast.success("Check email for password reset link", {
              duration: 4000,
            });
          }
        } else {
          setLoading(false);
          toast.error("Invalid login details", {
            duration: 4000,
          });
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
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Form
          text1={"Forgot Password"}
          text2={"Get a link to reset your password"}
        >
          <div className="center-form">
            <div>
              <div className="relative mb-4">
                <Input
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" className="mb-4 w-full" onClick={funcProceed}>
              Proceed
            </Button>
            <div className="flex justify-center text-sm text-muted-foreground">
              Already have an Account?&nbsp;{" "}
              <a className="underline hover:no-underline" href="/login">
                Login
              </a>
            </div>
          </div>
        </Form>
      )}
    </>
  );
}
