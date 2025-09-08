import { Instagram , MessageCircleMore, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 sm:px-[3vw] md:px-[5vw] lg:px-[7vw] xl:px-[9vw] border-t-2 mt-5">
      <div className="flex justify-between items-center py-4"> 
        <div className="flex gap-4 items-center justify-center">
          <Link href={'https://www.instagram.com/'}><Instagram /></Link>
          <Link href={'https://t.me/Rezanasiriii'}><Send /></Link>
          <Link href={'https://wa.me/+989028463423'}><MessageCircleMore /></Link>
        </div>
        <p className="text-sm">© 2023 Rizza. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
