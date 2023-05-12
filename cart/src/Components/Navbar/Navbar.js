import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <nav className="w-full sticky top-0 flex justify-between h-14 border bg-orange-500">
        <ul className="flex leading-[56px] gap-4 text-xl pl-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact US</a>
          </li>
        </ul>
        <div className="flex gap-2">
          <span>
            <AiOutlineShoppingCart className="text-3xl h-14 py-auto"/>
          </span>
          <p className="border px-4 py-4">66</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
