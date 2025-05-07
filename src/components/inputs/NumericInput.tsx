import { useState } from "react";

export default function NumericInput() {
  const [value, setValue] = useState<number>(1);
 
  const handleIncrement = () => {
    setValue((prev) => prev + 1);
    Number(value);
  }

  const handleDecrement = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
      Number(value);
    }
  }

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value > 1) {
        setValue(Number(e.target.value));
    }
  }

  return (
    <div className="py-2 px-3 dark:bg-gray-700 rounded-lg" data-hs-input-number="">
      <div className="w-30 flex justify-between items-center gap-x-5">
        <div className="grow">
          <input
            className="w-full p-0 bg-transparent border-0 text-white focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            aria-roledescription="Number field"
            data-hs-input-number-input=""
            onChange={handleChangeValue}
            value={value}
          />
        </div>
        <div className="flex justify-end items-center gap-x-1.5">
          <button
            type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            tabIndex={-1}
            aria-label="Decrease"
            data-hs-input-number-decrement=""
            onClick={handleDecrement}
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <button
            type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            tabIndex={-1}
            aria-label="Increase"
            data-hs-input-number-increment=""
            onClick={handleIncrement}
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
