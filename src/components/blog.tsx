import React from "react";
import Image from "next/image";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";
import { DMSerif, JostFont } from "@/app/app.font";

const BlogData = [
  {
    image: "/blogs/01.svg",
    type: "Kitchen Design",
    title: "Lets Get Solution For Bulding Construction Work",
    date: "26 December 2022",
  },
  {
    image: "/blogs/01.svg",
    type: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December 2022",
  },
  {
    image: "/blogs/01.svg",
    type: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December 2022",
  },
];
const Blog = () => {
  return (
    <section className="px-4 mt-20 md:mt-[200px]">
      <div className="container mx-auto">
        <h1
          className={cn(
            "text-center text-3xl sm:text-4xl md:text-[50px] leading-tight md:leading-[125%] tracking-[2%] text-[#292F36]",
            DMSerif.className
          )}
        >
          Article & News
        </h1>
        <p
          className={cn(
            "text-center w-full max-w-2xl mx-auto text-base md:text-lg leading-relaxed md:leading-[150%] tracking-[1%] mt-4",
            JostFont.className
          )}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 md:mt-[52px]">
          {BlogData.map((item, index) => (
            <BlogCard
              key={index}
              image={item.image}
              type={item.type}
              title={item.title}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

interface BlogCardProps {
  image: string;
  type: string;
  title: string;
  date: string;
}

function BlogCard({ image, type, title, date }: BlogCardProps) {
  return (
    <div className="group w-full h-full rounded-3xl sm:rounded-[62px] outline outline-1 outline-[#E7E7E7] bg-none hover:bg-[#F4F0EC] transition-colors">
      <div className="flex flex-col p-4 sm:p-[21px]">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={image}
            fill
            objectFit="cover"
            alt={`Blog post: ${title}`}
            className="rounded-2xl sm:rounded-t-[45px]"
          />
          <span className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white px-2 sm:px-[11px] py-1 sm:py-[8px] rounded-lg sm:rounded-t-[8px] sm:rounded-br-[8px] text-[#292F36] text-xs sm:text-sm font-medium">
            {type}
          </span>
        </div>
        <div className="mt-4 sm:mt-[21px]">
          <h2
            className={cn(
              "text-xl sm:text-[25px] leading-tight sm:leading-[125%] tracking-[2%] text-[#292F36]"
            )}
          >
            {title}
          </h2>
          <div className="flex justify-between items-center mt-4 sm:mt-[30px]">
            <time className="text-[#4D5053] text-xs sm:text-sm">{date}</time>
            <button
              className="text-[#CDA274] text-lg sm:text-xl font-bold rounded-full bg-[#F4F0EC] px-4 sm:px-[23px] py-3 sm:py-[19.31px] group-hover:bg-white group-hover:text-[#292F36] transition-colors"
              aria-label="Read more"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
