"use client";
import OtherContainer from "@/components/otherContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <OtherContainer src="/contact.jpg" alt="contact">
        <div>
          <h1 className="heading-home mb-4">Get in Touch</h1>
          <p className="mx-5 mb-4 text-sm md:mx-10 md:text-base">
            Contact us with any questions or if you will like more information
            about our services.
            {/* Join our community on telegram by
            clicking{" "}
            <a
              href="t.me/ApexTradersx"
              className="underline hover:no-underline"
              target="_blank"
            >
              here
            </a> */}
          </p>
          <Card className="space-y-4 border-0 p-6">
            <Input type="text" placeholder="Fullname" autoComplete="off" />
            <Input type="email" placeholder="Email" autoComplete="off" />
            <Textarea
              type="text"
              placeholder="Message"
              autoComplete="off"
            ></Textarea>
            <Button className="w-full">Send Message</Button>
          </Card>
        </div>
      </OtherContainer>
    </>
  );
}
