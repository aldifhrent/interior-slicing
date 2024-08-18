import React from "react";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <Wrapper>
        <header className="mt-[44px] ">
          <div className="flex justify-between items-center">
            <div className="w-[177px] h-[177px] relative">
            <Image src="/Logo.svg" fill alt="Logo" className="absolute" />
            </div>
            
            <nav className="hidden md:flex gap-x-7 items-center">
                <p>Home</p>
                <p>Pages</p>
                <p>Services</p>
                <p>Project</p>
                <p>Blog</p>
                <p>Contact</p>
                <button><CiSearch className="w-6 h-6"/></button>
            </nav>
          </div>
        </header>
      </Wrapper>
    </>
  );
};

export default Header;
