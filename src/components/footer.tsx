import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-[200px] pb-0 lg:pb-[207px] px-[100px] md:px-[207px] ">
      <div className="flex flex-col lg:flex-row gap-x-[101px] gap-y-4 w-full h-full lg:w-[1199px] lg:h-[370px]">
        <div className="flex flex-col w-[393px]">
          <Image src="/logo.svg" alt={"Footer Logo"} width={177} height={50} />
          <h1 className="mt-[18px] text-[12px] lg:text-[16px] leading-[150%] tracking-[2%] w-1/2 md:w-full">
            It is a long established fact that a reader will be distracted
            lookings.
          </h1>
          <div className="flex gap-x-4  mt-[31px]">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[25px]">Pages</h1>
          <ul className="space-y-2 mt-4">
            <li className="text-[16px] ">About</li>
            <li>Our Projects</li>
            <li>Our Team</li>
            <li>Contact Us</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[16px] md:text-[20px]">Services</h1>
          <ul className="mt-4 space-y-2">
            <p>Kitchen</p>
            <p>Living Area</p>
            <p>Bathroom</p>
            <p>Dining Hall</p>
            <p>Bedroom</p>
          </ul>
        </div>
        <div>
          <h1 className="text-[25px]">Contact</h1>
          <ul className="space-y-2">
          <p>55 East Birchwood Ave. Brooklyn, New York 11201 </p>
          <p>contact@interno.com</p>
          <p>(123) 456 - 7890</p>
          </ul>
 
        </div>
      </div>
    </section>
  );
};

export default Footer;
