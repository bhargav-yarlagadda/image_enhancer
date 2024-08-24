import React, { useContext } from "react";
import CustomFilter from "./Customfilter";
import InstaFilter from "./instaFilter";// Ensure this is uncommented and correctly implemented
import { FilterContext } from "../App";
export const Filter: React.FC = () => {
  const {tabFilter,setTabFilter} = useContext(FilterContext)

  return (
    <div className="text-sm mt-4 lg:mt-0 font-medium text-center text-gray-500 w-[400px] border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap justify-between -mb-px">
        <li
          onClick={() => setTabFilter("instaFilter")}
          className={`me-2 cursor-pointer ${tabFilter === "instaFilter" ? "border-b-2 border-white" : ""}`}
        >
          Insta filter
        </li>
        <li
          onClick={() => setTabFilter("customFilter")}
          className={`me-2 cursor-pointer ${tabFilter === "customFilter" ? "border-b-2 border-white" : ""}`}
        >
          Custom filter
        </li>
      </ul>
      {tabFilter === "instaFilter" ? <InstaFilter /> : <CustomFilter />}
    </div>
  );
};
