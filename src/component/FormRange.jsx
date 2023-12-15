import { useState } from "react";
import { FormaPrice } from "../utils";
const FormRange = ({ label, name, size, price }) => {
  const min = 0;
  const max = 100000;
  const step = 1000;
  const [selectedPrice, setSelectedPrice] = useState(price || max);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{FormaPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        value={selectedPrice}
        step={step}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {FormaPrice(max)}</span>
      </div>
    </div>
  );
};
export default FormRange;
