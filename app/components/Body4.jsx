import React from "react";
import Atable from "./Atable";

export default function Body4() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-[80vh] w-screen">
      <div className="text-3xl font-bold w-3/5 py-4">
        SearchBox
      </div>
      <div className="border border-black h-4/5 w-3/5 py-4">
        <h1 className="text-3xl font-bold">All Products</h1>
        <div className="w-full flex text-sm text-smalltext">
            <div className="border-border-black h-8 w-[33%]">Coins</div>
            <div className="border-border-black h-8 w-[33%]">Est. APR</div>
            <div className="border-border-black h-8 w-[33%]">Duration</div>
        </div>
        <Atable coin="USDT" apr="43%" duration="Flexible / Fixed" />
        <Atable coin="BNB" apr="10%" duration="Flexible / Fixed" />
        <Atable coin="ETH" apr="7%" duration=" Fixed" />
        <Atable coin="BTC" apr="23%" duration="Flexible / Fixed" />
        <Atable coin="SOL" apr="37%" duration="Flexible / Fixed" />
        <Atable coin="XRP" apr="24%" duration="Flexible" />
        <Atable coin="XRP" apr="24%" duration="Flexible" />
        <Atable coin="XRP" apr="24%" duration="Flexible" />
      </div>
      <div className="w-3/5 flex justify-center"><button className="border-none p-4 text-yellow-400 ">View more</button></div>
    </div>
  );
}







