import React from "react";
import Image from "next/image";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";
import { DMSerif, JostFont } from "@/app/app.font";
import BlogCard from "./blog.card";

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



