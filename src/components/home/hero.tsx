import Image from "next/image";
import Wrapper from "../wrapper";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";

const DMSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const JostFont = Jost({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <Wrapper className="mt-4 md:mt-[57px] mx-1 md:mx-4">
      <section className="flex bg-heros bg-cover h-full bg-no-repeat rounded-[40px] py-[100px] md:py-[150px] lg:py-[208px] px-[20px] md:px-[40px] lg:pl-[52px] w-full">
        <div className="w-full lg:w-1/2 md:w-1/2 ">
          <h1
            className={cn(
              "text-[32px] md:text-[48px] lg:text-[65px] leading-[120%] md:leading-[125%] text-[#292F36]",
              DMSerif.className
            )}
          >
            Let Your Home Be Unique
          </h1>
          <p
            className={cn(
              "text-[14px] md:text-[20px] lg:text-[22px] leading-[140%] md:leading-[150%] tracking-[1%] text-[#4D5053] mt-[12px] md:mt-[16px] lg:mt-[18px]"
            )}
          >
            There are many variations of the passages of lorem ipsum from
            available, majority
          </p>
          <button className="bg-[#292F36] px-[16px] md:px-[24px] lg:px-12 py-[16px] md:py-[20px] lg:py-[26px]  w-auto  text-white rounded-[12px] md:rounded-[16px] lg:rounded-[18px] mt-[30px] md:mt-[40px] lg:mt-[51.91px]">
            Get Started <span className="text-[#CDA274]">-&gt;</span>
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;
