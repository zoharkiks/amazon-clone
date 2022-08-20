import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const Sidebar = ({
  sidebar,
  setSidebar,
}: {
  sidebar: boolean;
  setSidebar: boolean;
}) => {
  return (
    <div className="xl:w[15%]  absolute  top-0 left-0 flex min-h-full w-1/2 flex-col space-y-10 bg-white  font-proximaSemibold drop-shadow-lg md:w-[25%] lg:w-[15%]">
      <div className="relative flex h-max w-full items-center justify-center bg-gray ">
        <img src={images.logo.src} className="w-32" alt="" />
        
        <Icon
          onClick={() => setSidebar(!sidebar)}
          icon="clarity:window-close-line"
          className="absolute right-4 top-2  h-4 w-4 cursor-pointer md:hidden "
        />
      </div>

      <div className="flex flex-col space-y-8 px-5  ">
        <div className="flex cursor-pointer items-center justify-between">
          <span>Electronics</span>
          <Icon icon="akar-icons:chevron-right" />
        </div>

        <div className="flex cursor-pointer items-center justify-between">
          <span>Fashion</span>
          <Icon icon="akar-icons:chevron-right" />
        </div>

        <div className="flex cursor-pointer items-center justify-between">
          <span>Art & Craft</span>
          <Icon icon="akar-icons:chevron-right" />
        </div>

        <div className="border-b-2 border-gray"></div>
        <div className="flex cursor-pointer items-center justify-between">
          <span>Today's Deals</span>
          <Icon icon="akar-icons:chevron-right" />
        </div>
        <div className="flex cursor-pointer flex-col justify-center space-y-8">
          <span>Customer Service</span>
          <span>Registry</span>
          <span>Gift Cards</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
