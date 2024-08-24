import React,{useContext} from "react";
import { filterValues } from "../utils/utils";
import { FilterContext } from "../App";

const InstaFilter: React.FC = () => {
    const { filterClass, setFilterClass } = useContext(FilterContext);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterClass(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="text-white max-w-[400px] mt-10">
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="filter"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a filter
        </label>
        <select
          id="filter"
          value={filterClass}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors duration-300 ease-in-out"
        >
          <option value="" disabled>
            Choose a filter
          </option>
          {
            filterValues.map((filter, index) => (
              <option
                key={index}
                value={filter.class}
                className="bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
              >
                {filter.name}
              </option>
            ))
          }
        </select>
      </form>
    </div>
  );
};

export default InstaFilter;
