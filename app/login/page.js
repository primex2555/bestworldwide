"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoadingSpinner from "@/components/loadingSpinner";

import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/formContainer";
import SearchParams from "@/components/searchParams";
import { Suspense } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  useEffect(() => {
    const getstorage = sessionStorage.getItem("newlogin");
    if (getstorage) toast.success(getstorage);
    sessionStorage.removeItem("newlogin");
  }, []);

  const urlemail = (
    <Suspense>
      <SearchParams />
    </Suspense>
  );

  const router = useRouter();
  const schema = yup
    .object({
      email: yup.string().email().required("email is required"),
      password: yup.string().required("password is required"),
    })
    .required();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function signIn(data) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    setLoading(true);
    try {
      const res = await fetch(`/api/login`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const cdata = await res.json();
        if (cdata.error === "Email not verified") {
          setLoading(false);
          toast.error("Email not verified, check your email", {
            duration: 4000,
          });
        }
        if (cdata.message === "admin") {
          router.push("/admin");
        } else if (cdata.value) {
          sessionStorage.setItem("sessionId", cdata.value);
          router.push(`/dashboard`);
        } else if (cdata.error) {
          setLoading(false);
          toast.error(cdata.error);
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error("Invalid login details", {
        duration: 4000,
      });
    }
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Form
            text1={"Login"}
            text2={"Sign in with email and password"}
            text3={""}
          >
            <form onSubmit={handleSubmit(signIn)} className="center-form">
              <div>
                <p className="text-tbody mb-1 text-left text-sm text-red-500">
                  {errors.email?.message}
                </p>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <div className="relative mb-4">
                  <Input
                    type="email"
                    className="input-dash"
                    placeholder="Email"
                    autoComplete="off"
                    {...register("email")}
                  />
                </div>
              </div>

              <div>
                <p className="text-tbody mb-1 text-left text-sm text-red-500">
                  {errors.password?.message}
                </p>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="relative mb-4">
                  <Input
                    type="password"
                    className="input-dash"
                    placeholder="Password"
                    autoComplete="off"
                    {...register("password")}
                  />
                </div>
              </div>

              <div className="text-sm text-muted-foreground pb-2">
                <a href="/forgot" className="hover:underline">
                  Forgot Password
                </a>
              </div>

              <div className="">
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </div>
              <div className="mt-4 flex justify-center space-x-3 text-center text-sm text-muted-foreground">
                No account?&nbsp;
                <a className="underline hover:no-underline" href="/register">
                  Sign up
                </a>
              </div>
            </form>
          </Form>
        </>
      )}
    </>
  );
}
