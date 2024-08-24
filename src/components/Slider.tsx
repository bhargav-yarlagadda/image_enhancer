import React from "react";

interface CustomSliderProps {
  value: number;
  onChange: (value: number) => void;
  max: number;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ value, onChange, max }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="relative w-full flex items-center">
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
      />
      <div
        className="absolute top-0 left-0 w-2 h-2 bg-blue-600 rounded-full"
        style={{ left: `${(value / max) * 100}%`, transform: 'translateX(-50%)' }}
      />
    </div>
  );
};

export default CustomSlider;
