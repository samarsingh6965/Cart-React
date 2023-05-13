import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavCart from "../NavCart/NavCart";
import { useState } from "react";

function Navbar({data,setData}) {
  const [toggle , setToggle] = useState(false)
  const click = () =>{
    setToggle(!toggle)
  }
  
  return (
    <>
      <nav className="w-full sticky top-0 flex justify-between z-20 h-14 border bg-blue-500 text-white">
        <ul className="flex leading-[56px] gap-4 text-xl pl-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact US</Link>
          </li>
        </ul>
        <div className="flex gap-2 relative mr-4">
          <button onClick={click} className="px-2 flex gap-3 text-xl items-center">
            <AiOutlineShoppingCart className="text-3xl h-14 py-auto"/>Cart
          </button>
          <p className="bg-red-500 text-white flex justify-center border-black border px-2 w-6 h-6 rounded-full absolute top-1 left-7">{data.length}</p>
        </div>
      </nav>
      {toggle === true ?  <NavCart data={data} setData={setData}/>: null}
    </>
  );
}

export default Navbar;
