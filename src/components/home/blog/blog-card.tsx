import { cn } from "@/lib/util";
import Image from "next/image";
import React from "react";

interface BlogCardProps {
  image: string;
  type: string;
  title: string;
  date: string;
}

const BlogCard = ({ image, type, title, date }: BlogCardProps) => {
  return (
    <div className="group w-full h-full rounded-[62px] outline outline-1 outline-[#E7E7E7] mb-7 bg-none hover:bg-[#F4F0EC]">
      <div className="flex flex-col p-[21px]">
        <div className="relative w-full h-[300px]">
          <Image
            src={image}
            fill
            objectFit="cover"
            alt="Blogs"
            className="rounded-t-[45px]"
          />
          <p className="absolute bottom-4 left-4 bg-white px-[11px] py-[8px] rounded-t-[8px] rounded-br-[8px] text-[#292F36] text-sm font-medium">
            {type}
          </p>
        </div>
        <div className="mt-[21px]">
          <h1
            className={cn(
              "text-[25px] leading-[125%] tracking-[2%] text-[#292F36]"
            )}
          >
            {title}
          </h1>
          <div className="flex justify-between items-center mt-[30px]">
            <p className="text-[#4D5053] text-sm">{date}</p>
            <button className="text-[#CDA274]  text-xl font-bold rounded-full bg-[#F4F0EC] px-[23px] py-[19.31px] group-hover:bg-white group-hover:text-[#292F36] transition-colors ">
              -&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
