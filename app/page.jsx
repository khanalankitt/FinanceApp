import React from "react";
import Header from "./components/Header";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Body4 from "./components/Body4";

export default function page() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
    </div>
  );
}
