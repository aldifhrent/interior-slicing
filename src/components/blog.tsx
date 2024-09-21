import React from "react";
import Wrapper from "./wrapper";
import BlogCard from "./home/blog/blog-card";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";

const DMSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const JostFont = Jost({
  subsets: ["latin"],
});

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
    <section className="px-4 mt-[200px]">
      <div className="container">
        <h1
          className={cn(
            "text-center text-[40px] md:text-[50px] leading-[125%] tracking-[2%] text-[#292F36]",
            DMSerif.className
          )}
        >
          Article & News
        </h1>
        <p
          className={cn(
            "text-center w-full text-[16px] md:text-[18px] leading-[150%] tracking-[1%]",
            JostFont.className
          )}
        >
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
        <div className="flex flex-col xl:flex-row mt-[52px] gap-x-[27px] mx-2 items-center justify-center">
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
