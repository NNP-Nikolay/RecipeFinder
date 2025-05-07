'use client';

import { useState } from "react";
import NumericInput from "./NumericInput";

export default function SearchInputDropdown() {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState('All kinds of cuisines');

  const handleClickDropdownVisible = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  }

  return (
    <form className="flex justify-center gap-2.5">
      <div className="relative flex w-full max-w-lg">
        <div className="flex-col">
          <button
            onClick={handleClickDropdownVisible}
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            type="button"
            className="h-11 w-45 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
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

          <div
            id="dropdown"
            className={`z-10 ${dropdownVisible ? 'visible' : 'hidden'} w-45 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 absolute mt-1 left-0`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  onClick={() => handleSelectedCategory('All kinds of cuisines')}
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  All kinds of cuisines
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedCategory('Italian')}
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Italian
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedCategory('Mexican')}
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mexican
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSelectedCategory('Chinese')}
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Chinese
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative w-full">
          <input
            type="search"
            id="searchDropdown"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search for recipes..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      <NumericInput />
    </form>
  );
}
