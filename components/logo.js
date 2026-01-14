import { logo } from "./fonts";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-x-2 text-2xl font-semibold text-white dark:text-muted-foreground">
        <Image src={"/logo.png"} width={70} height={70} alt="logo" />{" "}
        <span>BWWT</span>
      </div>
    </Link>
  );
}
