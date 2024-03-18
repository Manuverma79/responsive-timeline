import React from "react";

function HoverText(props) {
  return (
    <div className="h-14 w-auto p-6 flex items-center justify-center bg-[#3A3A3E] rounded-md  border-gray-500">
      <div className="font-sans text-base font-bold text-neutral-600 dark:text-neutral-200">
        {props.children}
      </div>
    </div>
  );
}

export default HoverText;
