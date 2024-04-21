import "../index.css";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function DropDownMenu() {
  return (
    <ul className="absolute text-white bg-amber-400 top-12 py-2 gap-1 px-3 rounded-b-lg flex flex-col">
      <li className="hover:text-black">Website Design</li>
      <li className="hover:text-black">Optimizing Website</li>
      <li className="hover:text-black">Website Development</li>
      <li className="hover:text-black">Website Application</li>
    </ul>
  );
}

export default function NavbarComponents() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
      setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 3000);
  }

  return (
    <nav className="w-full flex justify-center items-center mt-5 gap-52 font-quicksand">
      <h1 className="font-semibold">
        Zumpid <span className="text-amber-400">| Pengembangan Web </span>
      </h1>
      <ul className="flex flex-row gap-5 justify-center items-center cursor-pointer bg-slate rounded-lg py-1 px-3 drop-shadow-lg text-sm font-semibold bg-amber-400 text-white">
        <li
          onClick={() => window.location.assign("/")}
          className="cursor-pointer hover:text-black"
        >
          Home
        </li>
        <li
          onClick={() => window.location.assign("/tentang")}
          className="cursor-pointer hover:text-black"
        >
          Tentang
        </li>
        <li
          className="cursor-pointer hover:text-black flex justify-center items-center"
          onClick={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Layanan <FaAngleDown />
          {isDropdownVisible && <DropDownMenu />}
        </li>
        <li
          onClick={() => window.location.assign("/#")}
          className="cursor-pointer hover:text-black"
        >
          Portfolio
        </li>
        <li
          onClick={() => window.location.assign("/#")}
          className="cursor-pointer hover:text-black"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
