import React, { useState } from "react";
import CustomFilter from "./Customfilter";
import InstaFilter from "./instaFilter";// Ensure this is uncommented and correctly implemented

export const Filter: React.FC = () => {
  const [clicked, setClicked] = useState<string>("insta");

  return (
    <div className="text-sm mt-4 lg:mt-0 font-medium text-center text-gray-500 w-[400px] border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap justify-between -mb-px">
        <li
          onClick={() => setClicked("insta")}
          className={`me-2 cursor-pointer ${clicked === "insta" ? "border-b-2 border-white" : ""}`}
        >
          Insta filter
        </li>
        <li
          onClick={() => setClicked("custom")}
          className={`me-2 cursor-pointer ${clicked === "custom" ? "border-b-2 border-white" : ""}`}
        >
          Custom filter
        </li>
      </ul>
      {clicked === "insta" ? <InstaFilter /> : <CustomFilter />}
    </div>
  );
};
