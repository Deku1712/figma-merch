import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-yellow px-20 py-[22px] flex justify-between items-center ">
      <div className="flex justify-start items-center gap-2">
        <button className="btn">SHOP</button>
        <button className="btn">ABOUT</button>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 ">
        <Image
          width={221}
          height={18}
          src="https://store.figma.com/cdn/shop/t/36/assets/logo-full.static.svg?v=89107020529489074251733876596"
          alt="The Figma Store"
        />
      </div>
      <div className="flex justify-end items-center">
        <button className="btn">CART 0</button>
      </div>
    </div>
  );
};

export default Navbar;
