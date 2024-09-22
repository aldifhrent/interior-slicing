import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/util";
import Image from "next/image";
import { DMSerif, JostFont } from "@/app/app.font";

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
interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  testimonial: string;
}

function TestimonialCard({
  name,
  location,
  image,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white px-[37px] pt-4 lg:pt-5 w-full h-full rounded-[18px] hover:shadow-lg hover:outline cursor-pointer ">
      <div className="flex gap-x-[23px]">
        <div className="flex items-center gap-4 justify-center">
          <div>
            <Image
              src="/avatars/avatar-1.svg"
              height={60}
              width={60}
              alt="Image"
              className="max-w-none"
            />
          </div>
          <div className="flex flex-col items-centerjustify-center w-full">
            <p
              className={cn(
                "text-[12px] md:text-[16px] text-[#292F36] lg:leading-[150%] lg:tracking-[1%]"
              )}
            >
              {name}
            </p>
            <p
              className={cn(
                "text-[#4D5053] text-[12px] md:text-[14px] lg:tracking-[150%] lg:leading-[1%] lg:mt-2 text-justify",
                JostFont.className
              )}
            >
              {location}
            </p>
          </div>
        </div>
      </div>
      <p
        className={cn(
          "mb-4 mt-2  text-[#4D5053] text-[16px] md:text-[14px] w-full",
          JostFont.className
        )}
      >
        {testimonial}
      </p>
    </div>
  );
}
