import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";
import "./Styles/Select.css"

const Select = () => {
  const { percentage, setPercentage } = useContext(CalculatorContext);
  const tips = [5, 10, 15, 25, 50];

  return (
    <div className="mb-4 text-left">
      <label className="text-gray-600 text-left font-semibold mt-2">
        Select Tip %
      </label>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {tips.map((index) => (
          <button
            key={index}
            className="button bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-500"
            onClick={() => setPercentage(index)}
          >
            {index}%
          </button>
        ))}
        <input
          type="number"
          value={percentage}
          placeholder="Custom"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none"
          onInput={ (e) => setPercentage(Number(e.target.value)) }
        />
      </div>
    </div>
  );
};

export default Select;
