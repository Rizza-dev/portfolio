
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-4 sm:px-[3vw] md:px-[5vw] lg:px-[7vw] xl:px-[9vw] py-4 w-full border-b fixed top-0 right-0 left-0 bg-white/70 backdrop-blur-md z-10">
      <div className="w-full h-full flex justify-between items-center">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link className="lg:text-xl" href="#about" >من کیم ؟</Link>
          <Link className="lg:text-xl" href='#work' >نمونه کار</Link>
          <Link className="lg:text-xl" href='#contact' >تماس</Link>
        </div>
        <Link className="text-lg lg:text-xl tracking-wide" href={'/'}>Rizza <span className="text-slate-700">Luxe Code</span></Link>
      </div>
    </div>
  );
};

export default Navbar;
