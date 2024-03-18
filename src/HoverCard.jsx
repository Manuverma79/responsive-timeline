import React from "react";

function HoverCard() {
  return (
    <div className="flex justify-between w-auto h-80 rounded-md p-2 text-white space-x-4 border-1 border-slate-200 bg-[#232325]">
      <div className="flex flex-col gap-2 space-y-1">
        <h4 className="text-2xl font-semibold">Details</h4>
        <p className="text-sm capitalize">
          total reviews
          <br /> positive reviews
          <br /> negative reviews
          <br /> comments
        </p>
        <img
          className="w-60"
          src="src\assets\histogram_descriptive_statistics.webp"
          alt="stats"
        />
      </div>
    </div>
  );
}

export default HoverCard;
