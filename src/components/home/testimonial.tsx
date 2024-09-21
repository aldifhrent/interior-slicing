import React from "react";
import Wrapper from "../wrapper";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/util";
import TestimonialCard from "@/components/home/testimonial/testimonial-card";

const DMSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const Testimonial = () => {
  return (
    <section className="mt-20 px-4 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center bg-[#F4F0EC] rounded-[50px] w-full h-full p-12 mx-auto">
          <h1
            className={cn(
              "text-center text-3xl md:text-[50px] leading-tight md:leading-[125%] tracking-wider w-full mb-8 md:mb-[38px]",
              DMSerif.className
            )}
          >
            What The People Think About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((index) => (
              <TestimonialCard
                key={index}
                name="Nattasha Mith"
                location="Sydney, USA"
                image={`/avatars/avatar-${index}.svg`}
                testimonial="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eius sunt exercitationem alias assumenda veritatis cupiditate vero nemo, nihil dolore dolorum sint. Nulla architecto dolorem excepturi facilis quo a atque?"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
