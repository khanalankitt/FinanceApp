import React from "react";

export default function Acard(props) {
  return (
    <div className="flex flex-col p-6 gap-8 w-[25%] rounded-lg shadow-lg shadow-gray-500/50">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{props.title}</h2>
        <img src="./Aphoto.png" alt="photo" className="h-12" />
      </div>
      <p className="text-smalltext text-md">
        {props.info}
      </p>
    </div>
  );
}