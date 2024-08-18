import { cn } from "@/lib/util";
import { DM_Serif_Display, Jost } from "next/font/google";
import React from "react";

const DMSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap'
});

const JostFont = Jost({
  subsets: ["latin"],
});

const statistics = [
  { value: 12, label: "Years of Experience" },
  { value: 85, label: "Success Project" },
  { value: 15, label: "Active Project" },
  { value: 95, label: "Happy Customers" },
];

const Counter = () => {
  return (
    <div className="bg-[#F4F0EC] mt-[200px] w-full h-full lg:px-[419px] py-[151px]">
      <div className="grid grid-cols-1 justify-center lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 text-center divide-[#CDA274] gap-y-8 lg:gap-y-0 gap-x-8 ">
        {statistics.map((stat, index: number) => (
          <div key={index}>
            <h1
              className={cn(
                "text-[85px] leading-[125%] tracking-[2%] text-[#CDA274]",
                DMSerif.className
              )}
            >
              {stat.value}
            </h1>
            <p
              className={cn(
                "text-[22px] leading-[150%] tracking-[1%] mt-4",
                JostFont.className
              )}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
