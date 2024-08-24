import React, { createContext, useState} from "react";
import Image from "./components/Image";
import { Filter } from "./components/Filter";
// Define the types for the context value
interface CustomFilterState {
  contrast: number;
  brightness: number;
  saturate: number;
  sepia: number;
  gray: number;
}

interface FilterContextType {
  tabFilter: string;
  setTabFilter: (tab: string) => void;
  filterClass: string;
  setFilterClass: (filter: string) => void;
  customFilter: CustomFilterState;
  setCustomFilter: React.Dispatch<React.SetStateAction<CustomFilterState>>;
}

// Initialize the context with default values
export const FilterContext = createContext<FilterContextType>({
  tabFilter: 'instaFilter',
  setTabFilter: () => {},
  filterClass: '',
  setFilterClass: () => {},
  customFilter: {
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0
  },
  setCustomFilter: () => {}
});

const App: React.FC = () => {
  const [tabFilter, setTabFilter] = useState<string>('instaFilter');
  const [filterClass, setFilterClass] = useState<string>('');
  const [customFilter, setCustomFilter] = useState<CustomFilterState>({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0
  });

  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter
  };

  return (
    <FilterContext.Provider value={value}>
      <div className="bg-black w-screen h-screen px-9">
        <h1 className="text-white text-center p-6 text-3xl">
          Image Filter
        </h1>
        <div className="flex flex-col lg:flex-row text-white justify-around mt-5 items-center w-full">
          <Image />
          <Filter />
        </div>
      </div>
    </FilterContext.Provider>
  );
};

export default App;