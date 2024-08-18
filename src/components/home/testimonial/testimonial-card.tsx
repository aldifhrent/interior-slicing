import { cn } from "@/lib/util";
import { DM_Serif_Display, Jost } from "next/font/google";
import Image from "next/image";
interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  testimonial: string;
}

const DMSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const JostFont = Jost({
  subsets: ["latin"],
});

const TestimonialCard = ({
  name,
  location,
  image,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white px-[37px] pt-4 lg:pt-5 w-full rounded-[18px] mx-2">
      <div className="flex gap-x-[23px]">
        <div className="flex items-center gap-x-[23px]">
        <div className="relative h-[60px] w-[60px] ">
          <Image src="/avatars/avatar-1.svg" fill alt="Image"/>
        </div>
        <div className="flex flex-col items-centerjustify-center w-full">
          <p
            className={cn(
              "text-[12px] md:text-[16px] text-[#292F36] leading-[150%] tracking-[1%]"
            )}
          >
            {name}  
          </p>
          <p
            className={cn(
              "text-[#4D5053] text-[12px] md:text-[14px] tracking-[150%] leading-[1%] mt-2 text-justify",
              JostFont.className
            )}
          >
            {location}
          </p>
        </div>
        </div>
        
      </div>
      <p className={cn("mb-4 mt-0 lg:mt-[12px] text-[#4D5053] text-[16px] md:text-[14px]", JostFont.className)}>{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
