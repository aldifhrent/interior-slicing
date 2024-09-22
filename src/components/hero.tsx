import Image from "next/image";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";
import { DMSerif } from "@/app/app.font";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="px-2 lg:px-0">
          <div className="flex bg-heros bg-cover bg-center h-full bg-no-repeat rounded-[20px] p-[50px] w-full">
            <div className="max-w-sm md:max-w-md">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
