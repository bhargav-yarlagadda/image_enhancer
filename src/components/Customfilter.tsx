import React, { useContext } from "react";
import { FilterContext } from "../App";
import CustomSlider from "./Slider";

const CustomFilter: React.FC = () => {
  const { customFilter, setCustomFilter } = useContext(FilterContext);

  const handleSliderChange = (field: string) => (value: number) => {
    setCustomFilter((prevFilter) => ({
      ...prevFilter,
      [field]: value,
    }));
  };

  const sliders = [
    { label: 'Contrast', defaultValue: 100, field: 'contrast' },
    { label: 'Brightness', defaultValue: 100, field: 'brightness' },
    { label: 'Saturation', defaultValue: 100, field: 'saturate' },
    { label: 'Sepia', defaultValue: 0, field: 'sepia' },
    { label: 'Gray Scale', defaultValue: 0, field: 'gray' },
  ];

  return (
    <div className="mt-8">
      {sliders.map((slider) => (
        <div key={slider.field} className="mb-4">
          <label className="block text-white text-sm mb-2">{slider.label}</label>
          <CustomSlider
            value={customFilter[slider.field] || slider.defaultValue}
            onChange={handleSliderChange(slider.field)}
            max={slider.field === 'contrast' || slider.field === 'brightness' || slider.field === 'saturate' ? 200 : 100}
          />
        </div>
      ))}
    </div>
  );
};

export default CustomFilter;
