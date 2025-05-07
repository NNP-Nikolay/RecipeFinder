'use client';

import NavButton from "../button/NavButton";
import Carousel from "../carousel/Carousel";
import NumericInput from "../inputs/NumericInput";
import SearchInputDropdown from "../inputs/SearchInputDropdown";

export default function RecipesForm() {
  const handleClick = () => {
    console.log('NEXT');  
  }

  return (
    <form className="flex flex-col justify-between h-full">
      <div className="flex gap-2.5 justify-center">
        <SearchInputDropdown />
        <NumericInput />
      </div>
      <div className="flex mt-10 mb-10">
        <Carousel />
      </div>
      <div className="flex justify-center">
        <NavButton type='button' text={'Next'} onClick={handleClick} />
      </div>
    </form>
  );
}
