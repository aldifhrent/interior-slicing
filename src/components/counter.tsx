import { DMSerif, JostFont } from "@/app/app.font";
import { cn } from "@/lib/util";
import React from "react";

const statistics = [
  { value: 12, label: "Years of Experience" },
  { value: 85, label: "Success Project" },
  { value: 15, label: "Active Project" },
  { value: 95, label: "Happy Customers" },
];

const Counter = () => {
  return (
    <section className="px-4">
      <div className="container">
        <div className="bg-[#F4F0EC] mt-[200px] w-full h-full p-6 rounded-md">
          <div className="grid grid-cols-1 justify-center lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 text-center divide-[#CDA274] gap-y-8 gap-x-8 ">
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
      </div>
    </section>
  );
};

export default Counter;
