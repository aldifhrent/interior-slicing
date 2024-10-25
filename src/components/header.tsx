import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="">
        <div className="container">
          <div className="sticky top-0 flex justify-between items-center container mx-auto px-2 py-12">
            {/* Tambahkan padding dan positioning */}
            <Link href="/">
              <Image
                src="/Logo.svg"
                width={177}
                height={177}
                alt=""
                className="max-w-none"
              />
            </Link>
            <nav className="hidden lg:flex gap-x-7 items-center">
              <p className="hover:underline hover:underline-offset-8 hover:cursor-pointer">
                Home
              </p>
              <p className="hover:underline hover:underline-offset-8 hover:cursor-pointer">
                Pages
              </p>
              <p className="hover:underline hover:underline-offset-8 hover:cursor-pointer">
                Services
              </p>
              <p className="hover:underline hover:underline-offset-8 hover:cursor-pointer">
                Project
              </p>
              <p className="hover:underline hover:underline-offset-8 hover:cursor-pointer">
                Blog
              </p>
              <p className="hover:underline hover:underline-offset-8 hover:cursor-pointer">
                Contact
              </p>
              <button>
                <CiSearch className="w-6 h-6" />
              </button>
            </nav>
            <div className="block lg:hidden">
              <BiMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
