import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { images } from "../constants";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

const cart = useSelector(state => state.cart.cart);
const router = useRouter()


  return (
    <div className=" bg-gray md:pt-4 px-4 pb-5 md:flex md:justify-between">
      <div className="flex items-center justify-between  ">
        {/* logo */}
        <div className="flex items-center md:hidden">
          <Icon
            onClick={() => setSidebar(!sidebar)}
            icon="bytesize:menu"
            className="h-8 w-8"
          />
          <img src={images.logo.src} className="h-20 w-24" alt="" />
        </div>
       
       {/* Cart,fav,profile */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <div className="relative flex">
            <Icon icon="carbon:favorite" className="h-6 w-6 cursor-pointer" />
            <div className="absolute left-3 bottom-3 flex h-full w-full items-center justify-center rounded-xl bg-white font-proximaSemibold text-sm  text-orange">
              <span className="">0</span>
            </div>
          </div>
          <div className="relative flex">
            <Icon onClick={()=>router.push('/order-summary')} className="h-6 w-6 cursor-pointer" icon="akar-icons:cart" />
            <div className="absolute left-3 bottom-3 flex h-full w-full items-center justify-center rounded-xl bg-white font-proximaSemibold text-sm  text-orange">
              <span className="">{cart?.total_unique_items}</span>
            </div>
          </div>

          <Icon
            icon="carbon:user-avatar-filled"
            className="h-9 w-9 cursor-pointer"
          />
        </div>
      </div>

      <form className="flex items-center justify-center order-first md:ml-[35%]" action="">
        <div className="flex h-10 rounded-lg border-none   font-proxima text-sm">
          <input
            placeholder="I'm Looking For ..."
            type="text "
            className=" w-full px-4 outline-none border-r border-gray "
          />
          <select className="border-none text-sm  " name="" id="">
            <option value="all">All Dept.</option>
            <option value="electronics">Electronics</option>
            <option value="clothes">Clothes</option>
          </select>
        </div>
        <select className="border-none text-sm ml-2 hidden md:flex  " name="" id="">
            <option value="all">United States</option>
            <option value="electronics">Electronics</option>
            <option value="clothes">Clothes</option>
          </select>
      </form>

      {sidebar ? (
        <div className="">
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
