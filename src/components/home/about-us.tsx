import React from "react";
import Wrapper from "../wrapper";
import Image from "next/image";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";

const DMSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const JostFont = Jost({
  subsets: ["latin"],
});

const AboutUs = () => {
  return (
    <Wrapper className="w-full ">
      <div className="flex flex-col-reverse md:flex-row gap-x-[75px] px-0 md:px-12 lg:px-0">
        <div className="flex flex-col w-full md:w-1/2 py-[43px] mt-8 md:mt-0">
          <h1
            className={cn(
              "text-[40px] md:text-[50px] leading-[125%] tracking-[2%] text-[#292F36]",
              DMSerif.className
            )}
          >
            We Create The Art Of Stylish Living Stylishly
          </h1>
          <p className="text-[16px] md:text-[22px] leading-[150%] tracking-[1%] text-[#4D5053] mt-[33px]">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="flex items-center gap-x-[14.5px] mt-[45px] w-full">
            <Image
              src="/icons/call-icons.svg"
              width={93}
              height={93}
              alt="Call Icons"
            />
            <div className="mt-4">
              <h1
                className={cn(
                  "text-[18px] md:text-[24px] font-bold text-[#4D5053] tracking-[150%] leading-[1%]",
                  JostFont.className
                )}
              >
                012345678
              </h1>
              <p className={cn("text-[16px] lg:text-[18px] leading-[150%] tracking-[1%] text-[#4D5053] mt-4")}>
                Call Us Anytime
              </p>
            </div>
          </div>
          <button className="flex gap-x-1 rounded-[18px] mt-[47px] px-[31px] py-[26px] bg-[#292F36] w-fit text-white">
            Get Free Estimate<span className="text-[#CDA274]">-&gt;</span>
          </button>
        </div>
        <div className="relative w-full h-[300px] md:w-[653px] md:h-[700px] rounded-tr-[326.5px] rounded-bl-[123px] overflow-hidden">
          <Image src="/about-us.svg" fill alt="About Us" />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
