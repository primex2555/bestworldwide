"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import LoadingSpinner from "./loadingSpinner";
import Link from "next/link";
import Image from "next/image";

export default function Nav({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    try {
      await fetch("/api/adminlogout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div>
            <nav className="border-b bg-primary px-3 py-2 text-secondary dark:bg-transparent dark:text-primary">
              <div className="flex items-center justify-between">
                <div>
                  <Link href={"/"}>
                    <div className="flex items-center gap-x-2 text-xl text-white dark:text-muted-foreground">
                      <Image
                        src={"/logo.png"}
                        width={40}
                        height={40}
                        alt="logo"
                      />{" "}
                      <span>ADMIN</span>
                    </div>
                  </Link>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-0 py-4"
                  onClick={logout}
                >
                  <div className="flex items-center gap-x-2 text-sm">
                    Logout{" "}
                  </div>
                </Button>
              </div>
            </nav>
          </div>
          {children}
        </>
      )}
    </>
  );
}
