import { cn } from "@/lib/util";
import Image from "next/image";

interface BlogCardProps {
    image: string;
    type: string;
    title: string;
    date: string;
  }

export default function BlogCard({ image, type, title, date }: BlogCardProps) {
    return (
      <div className="group w-full h-full rounded-3xl sm:rounded-[62px] outline outline-1 outline-[#E7E7E7] bg-none hover:bg-[#F4F0EC] transition-colors">
        <div className="flex flex-col p-4 sm:p-[21px]">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={image}
              fill
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
  