import React from "react";
import Link from "next/link";

export default function Body1() {
  return (
    <div
      className="min-h-[80vh] w-full flex justify-center items-center mb-20"
      style={{
        backgroundImage: `url('https://yield.app/_astro/abstract-bg.Ds8gGCbB.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Earn up to 25% APY on <br /> your crypto</h1>
        <p>
          Enjoy daily passive income on 15+ crypto assets, on your own terms.
        </p>
        <Link className="bg-red-400 rounded-lg h-12 w-40 flex items-center justify-center text-white font-bold" href="/login">

          Get Started

        </Link>
      </div>
      <img src="./Aphoto.png" alt="photo" className="h-[65%]" />
    </div>
  );
}
