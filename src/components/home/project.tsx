import React from "react";
import Wrapper from "../wrapper";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";
import ProjectCard from "./project/project-card";

const DMSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const JostFont = Jost({
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <Wrapper className="mt-[150px]">
      <div className="flex flex-col items-center">
        <h1
          className={cn(
            "text-center text-[50px] text-[#292F36]",
            DMSerif.className
          )}
        >
          Follow Our Projects
        </h1>
        <p className="text-center w-1/2">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-x-12 gap-y-12 mt-[93px]">
          {[1, 2, 3,4 ].map((index) => (
            <ProjectCard
              key={index}
              image={"/projects/01.svg"}
              title={"Modern Kitchen"}
              type={"Decor / Artchitecture"}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
