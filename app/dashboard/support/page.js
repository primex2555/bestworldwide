"use client";
import GridContainer from "@/components/gridContainer";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import LoadingSpinner from "@/components/loadingSpinner";
import useData from "@/components/useData";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendSupportEmail } from "../../helpers/support";

export default function Support() {
  const { dataLoading, data } = useData();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitForm() {
    if (text) {
      // setLoading(true);
      // sendSupportEmail(data._id, text);
      // setText("");
      // setLoading(false);
      // toast.success("Email sent", { duration: 3000 });

      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("text", text);
        const res = await fetch(`/api/support`, {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          const cdata = await res.json();
          if (cdata.message) {
            setText("");
            setLoading(false);
            toast.success("Email sent", { duration: 3000 });
          } else if (cdata.error) {
            setLoading(false);
            toast.error("Error sending email", { duration: 3000 });
          }
        }
      } catch {
        toast.error("Error sending email", { duration: 3000 });
      }
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <GridContainer>
          <div className="heading">Customer Support</div>
          <div className="grid grid-cols-1 space-y-5 md:grid-cols-5 md:space-x-10 md:space-y-0">
            <Card className="col-span-3 p-6">
              <div>
                <label htmlFor="" className="text-textwhite">
                  For inquiries, suggestions or complains. Mail us
                </label>

                <div className="text-wrap text-xl font-medium lg:text-2xl lg:font-normal">
                  <a
                    href="mailto:support@opulenttradingfx.com"
                    className="underline hover:no-underline"
                  >
                    support@opulenttradingfx.com
                  </a>
                </div>

                <div className="my-4">
                  <Textarea
                    className="test-base h-40"
                    placeholder=""
                    autoComplete="off"
                    onChange={(e) => setText(e.target.value)}
                  ></Textarea>
                </div>
              </div>
              <div className="">
                <Button type="submit" className="w-full" onClick={submitForm}>
                  Proceed
                </Button>
              </div>
            </Card>
            <div></div>
          </div>
        </GridContainer>
      )}
    </>
  );
}
