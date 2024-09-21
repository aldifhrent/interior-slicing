import React from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="mt-[200px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[50px]  w-full h-full lg:w-[1199px] lg:h-[370px]">
          <div className="flex flex-col">
            <Image
              src="/logo.svg"
              alt={"Footer Logo"}
              width={177}
              height={50}
              className="max-w-none"
            />
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
            <ul className="mt-4 space-y-4">
              <li className="text-[16px] ">About</li>
              <li>Our Projects</li>
              <li>Our Team</li>
              <li>Contact Us</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[16px] md:text-[20px] lg:text-[25px]">
              Services
            </h1>
            <ul className="mt-4 space-y-4">
              <p>Kitchen</p>
              <p>Living Area</p>
              <p>Bathroom</p>
              <p>Dining Hall</p>
              <p>Bedroom</p>
            </ul>
          </div>
          <div className="">
            <h1 className="text-[25px]">Contact</h1>
            <ul className="mt-4 space-y-4">
              <p>55 East Birchwood Ave. Brooklyn, New York 11201 </p>
              <p>contact@interno.com</p>
              <p>(123) 456 - 7890</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
