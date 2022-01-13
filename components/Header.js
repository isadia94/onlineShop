import React, { useState } from "react";
import { SearchIcon, MenuIcon, ShoppingCartIcon } from "@heroicons/react/solid";

const Header = () => {
  const numberOfItems = useState(10);

  return (
    <header className="bg-black text-white">
      <div className="flex flex-grow items-center p-3 space-x-3">
        <h1 className="text-xl font-bold md:text-3xl flex-grow md:flex-grow-0">
          OnlineDuka
        </h1>
        <SearchIcon className="h-6 cursor-pointer md:hidden " />

        {/* SearchBar for medium and large devices */}

        <div className=" bg-yellow-400 hover:bg-yellow-500 cursor-pointer hidden md:inline-flex h-10 rounded-md flex-grow ">
          <input
            className="focus:outline-none text-black pl-2 flex-grow flex shrink rounded-l-md h-full "
            type="text"
          />
          <SearchIcon className="h-10 p-2 text-black" />
        </div>

        {/* Right */}
        <div className="link">
          <p className="text-xs">Hello Brian Lusigi,</p>
          <p className="font-bold text-sm">Account & Lists</p>
        </div>
        <div className="link">
          <p className="text-xs">Returns</p>
          <p className="font-bold text-sm"> & Orders</p>
        </div>
        <div className="flex items-center relative link">
          <span className="absolute bg-yellow-400 right-0 top-0 md:right-7 h-6 w-6 flex rounded-full items-center justify-center text-black font-bold text-sm">
            {numberOfItems}
          </span>

          <ShoppingCartIcon className="h-10" />
          <p className=" hidden font-bold text-sm md:inline-flex mt-4">Cart</p>
        </div>
      </div>

      <div className="mt-5 flex space-x-3">
        <p className="flex items-center bottom__links">
          <MenuIcon className="h-4" />
          All
        </p>
        <p className="bottom__links">Electronics</p>
        <p className="bottom__links">Women's</p>
        <p className="bottom__links">Men's</p>
        <p className="bottom__links">Kids</p>
        <p className="hidden sm:inline-flex bottom__links">Toys&Games</p>
        <p className="bottom__links">Sell</p>
      </div>
    </header>
  );
};

export default Header;
