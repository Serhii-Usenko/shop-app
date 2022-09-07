import React from "react";
import { GrBasket } from "react-icons/gr";
import {MdAccountCircle} from 'react-icons/md'

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/*desktop & tablet*/}
      <div className="hidden md:flex w-full h-full justify-between">
        <div className="flex items-center gap-2 text-4xl">Shop</div>

        <div className="flex">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-black duration-100 transition-all easy-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-black duration-100 transition-all easy-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-black duration-100 transition-all easy-in-out cursor-pointer">
              About us
            </li>
            <li className="text-base text-textColor hover:text-black duration-100 transition-all easy-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <GrBasket className="text-base text-2xl ml-7 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="flex items-center justify-center ml-8">
						<MdAccountCircle className="text-3xl cursor-pointer" />
					</div>
        </div>
      </div>

      {/*mobile*/}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
