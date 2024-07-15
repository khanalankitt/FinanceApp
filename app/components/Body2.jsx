import React from "react";
import Acard from "./Acard";

export default function Body2() {
  return (
    <div className=" w-screen flex flex-col justify-center items-center gap-16 min-h-[60vh] mb-20">
      <h1 className="text-4xl font-bold">Why choose to earn with Stake App?</h1>
      <div className="flex gap-8 justify-center">
        <Acard
          title="Enjoy passive income, daily"
          info="Generate daily passive income effortlessly with our range of Earn products. Start earning and growing your wealth today."
        />
        <Acard
          title="Gain access to Web3
"
          info="Our in-house DeFi team seeks out opportunities in the Web3 space and conducts thorough due diligence using a proprietary risk model."
        />
        <Acard
          title="Earn on your own terms
"
          info="Stay flexible or earn all year round with with Earn+365's 1-year commitment. Select from a range of products that suit your risk profile."
        />
      </div>
    </div>
  );
}
