'use client';

import { useState } from "react";

export default function SearchInputDropdown() {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState('All kinds of cuisines');

  const handleClickDropdownVisible = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  return (
    <div className="relative flex w-full">
      <div className="relative">
        <button
          onClick={handleClickDropdownVisible}
          id="dropdown-button"
          type="button"
          className="
            h-11 w-45 z-10 inline-flex items-center py-2.5 px-4
            text-sm font-bold text-center text-white
            border border-gray-600 rounded-l
            hover:bg-black/80 bg-black/60 backdrop-blur-sm
            focus:ring-4 focus:outline-none focus:ring-gray-700
          "
        >
          {selectedCategory}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {dropdownVisible && (
          <div
            id="dropdown"
            className="
              absolute z-999 mt-1 w-45 divide-y divide-gray-100
              rounded-lg shadow-sm bg-black
            "
          >
            <ul className="py-2 text-sm text-gray-300" aria-labelledby="dropdown-button">
              {['All kinds of cuisines', 'Italian', 'Mexican', 'Chinese'].map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleSelectedCategory(category)}
                    type="button"
                    className="
                      inline-flex w-full px-4 py-2
                      hover:bg-white/10 hover:text-white
                      transition-colors duration-200
                    "
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative w-full">
        <input
          type="search"
          id="searchDropdown"
          className="
            block p-2.5 w-full text-sm text-white
            bg-black/60 backdrop-blur-sm rounded-r-lg
            border-2 border-gray-600 placeholder-gray-400
            focus:ring-blue-500 focus:border-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Search for recipes..."
        />
        <button
          type="submit"
          className="
            absolute top-0 right-0 p-2.5 text-sm font-medium h-full
            text-white bg-blue-700 rounded-r-lg border border-blue-700
            hover:bg-blue-800 focus:ring-4 focus:outline-none
            focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
            dark:focus:ring-blue-800 cursor-pointer
          "
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
