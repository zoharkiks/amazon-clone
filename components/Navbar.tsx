import React from "react";
import { Icon } from "@iconify/react";
import { images } from "../constants";

const Navbar = () => {
  return (
    <div className=" bg-lightGray px-4 pb-5">
      <div className="flex items-center justify-between  ">
        {/* logo */}
        <div className="flex items-center">
          <Icon icon="bytesize:menu" className="h-8 w-8" />
          <img src={images.logo.src} className="h-20 w-24" alt="" />
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative flex">
            <Icon icon="carbon:favorite" className="h-6 w-6 cursor-pointer" />
            <div className="absolute left-3 bottom-3 flex h-full w-full items-center justify-center rounded-xl bg-white font-proximaSemibold text-sm  text-orange">
              <span className="">17</span>
            </div>
          </div>
          <div className="relative flex">
            <Icon className="h-6 w-6 cursor-pointer" icon="akar-icons:cart" />
            <div className="absolute left-3 bottom-3 flex h-full w-full items-center justify-center rounded-xl bg-white font-proximaSemibold text-sm  text-orange">
              <span className="">2</span>
            </div>
          </div>

          <Icon
            icon="carbon:user-avatar-filled"
            className="h-10 w-10 cursor-pointer"
          />
        </div>
      </div>

      <form className="flex justify-center items-center" action="">
        <div className="flex font-proxima text-sm border-none  rounded-lg h-10">
        <input placeholder="I'm Looking For ..." type="text " className=" px-4 outline-none " />
        <select className="border-none text-sm " name="" id="">
          <option value="all">All Dept.</option>
          <option value="electronics">Electronics</option>
          <option value="clothes">Clothes</option>
        </select>
        </div>
        
    
      </form>
    </div>
  );
};

export default Navbar;
