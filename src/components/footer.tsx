import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [FaFacebook, FaTwitter, FaLinkedin, FaInstagram];
  const pages = ["About", "Our Projects", "Our Team", "Contact Us", "Services"];
  const services = [
    "Kitchen",
    "Living Area",
    "Bathroom",
    "Dining Hall",
    "Bedroom",
  ];
  const contactInfo = [
    "55 East Birchwood Ave. Brooklyn, New York 11201",
    "contact@interno.com",
    "(123) 456 - 7890",
  ];

  const FooterSection = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => (
    <div className="flex flex-col mb-8 sm:mb-0">
      <h1 className="text-[20px] sm:text-[25px] mb-4 font-semibold">{title}</h1>
      <ul className="space-y-2 sm:space-y-4">
        {items.map((item, index) => (
          <li key={index} className="text-[14px] sm:text-[16px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="mt-[100px] sm:mt-[200px] px-4 sm:px-6 lg:px-8 mb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <div className="flex flex-col max-w-sm col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="Footer Logo"
              width={177}
              height={50}
              className="max-w-[150px] sm:max-w-none"
            />
            <p className="mt-4 sm:mt-[18px] text-[12px] sm:text-[14px] lg:text-[16px] lg:leading-[150%] lg:tracking-[2%]">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <div className="flex gap-x-4 mt-4 sm:mt-[31px]">
              {socialIcons.map((Icon, index) => (
                <Icon key={index} className="text-xl sm:text-2xl" />
              ))}
            </div>
          </div>
          <FooterSection title="Pages" items={pages} />
          <FooterSection title="Services" items={services} />
          <FooterSection title="Contact" items={contactInfo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
