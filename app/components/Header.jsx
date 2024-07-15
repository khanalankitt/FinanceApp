import React from "react";
import Link from "next/link";


export default function Header() {
  return (
    <div className="min-h-24 items-center justify-center w-screen border-2 border-black flex center gap-80">
      <div>Logo</div>
      <div className="flex gap-12">
        <Link href="/">Home </Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <Link href="/signup">Signup</Link>
    </div>
  );
}
