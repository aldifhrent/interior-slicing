import React from "react";
import Image from "next/image";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";
import { DMSerif, JostFont } from "@/app/app.font";

const AboutUs = () => {
  return (
    <section className="px-4">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row gap-x-[75px]">
          <div className="flex flex-col justify-center  xl:max-w-none mt-8 w-full lg:w-1/2">
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
            <div className="flex items-center gap-x-[14.5px] w-full mt-4">
              <Image
                src="/icons/call-icons.svg"
                width={93}
                height={93}
                alt="Call Icons"
                className="max-w-md"
              />
              <div className="mt-4">
                <h1
                  className={cn(
                    "text-[18px] md:text-[24px] font-bold text-[#4D5053] lg:tracking-[150%] leading-[1%]",
                    JostFont.className
                  )}
                >
                  012345678
                </h1>
                <p
                  className={cn(
                    "text-[16px] lg:text-[18px] leading-[150%] tracking-[1%] text-[#4D5053] mt-4"
                  )}
                >
                  Call Us Anytime
                </p>
              </div>
            </div>
            <button className="gap-x-1 rounded-[18px] mt-[47px] px-[31px] py-[26px] bg-[#292F36] w-fit text-white">
              Get Free Estimate<span className="text-[#CDA274]">-&gt;</span>
            </button>
          </div>
          <div className="rounded-tr-[260px] rounded-bl-[50px] overflow-hidden">
            <Image
              src="/about-us.svg"
              width={500}
              height={50}
              alt="About Us"
              className="max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
