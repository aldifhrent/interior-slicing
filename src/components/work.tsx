import { DMSerif, JostFont } from "@/app/app.font";
import { cn } from "@/lib/util";
import { DM_Serif_Display, Jost } from "next/font/google";

const WorksData = [
  {
    title: "Project Plan",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Realization",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];

const Work = () => {
  return (
    <section className="mt-[100px] ">
      <div className="container">
        <div className="flex flex-col xl:flex-row  lg:flex-row justify-center md:flex-row gap-x-[42px] items-center mb-[200px] gap-y-[42px] md:gap-y-0 ">
          {WorksData.map((work) => (
            <div
              key={work.title}
              className="text-center w-full h-full hover:outline hover:rounded-lg p-4 cursor-pointer"
            >
              <h2
                className={cn(
                  "text-[25px] md:text-3xl lg:text-4xl leading-[125%] text-[#292F36] text-nowrap",
                  DMSerif.className
                )}
              >
                {work.title}
              </h2>
              <p
                className={cn(
                  "mt-5 text-lg lg:text-[22px] leading-[150%] tracking-[1%] text-center",
                  JostFont.className
                )}
              >
                {work.description}
              </p>
              <button className="mt-[52px] px-4 py-1">Read More -&gt;</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
