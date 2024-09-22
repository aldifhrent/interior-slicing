import React from "react";
import { DM_Serif_Display, Jost } from "next/font/google";
import { cn } from "@/lib/util";
import Image from "next/image";
import { DMSerif } from "@/app/app.font";

const Projects = () => {
  return (
    <section className="mt-[150px] px-4">
      <div className="container">
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
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-x-12 gap-y-12 mt-[93px]">
            {[1, 2, 3, 4].map((index) => (
              <ProjectCard
                key={index}
                image={"/projects/01.svg"}
                title={"Modern Kitchen"}
                type={"Decor / Artchitecture"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
}

function ProjectCard({ image, title, type }: ProjectCardProps) {
  return (
    <div className="w-full  mx-auto hover:outline p-4 rounded-lg group">
      <div className="flex flex-col">
        <Image
          src={image}
          alt={title}
          width={525}
          height={548}
          className="w-full h-auto"
        />
        <div className="flex justify-between items-center mt-4 md:mt-6">
          <div>
            <p className="text-xl md:text-[25px]">{title}</p>
            <p className="text-sm mt-2">{type}</p>
          </div>
          <button className="bg-[#F4F0EC] group-hover:bg-[#c4c0bd] size-12 rounded-full">
            <span className="size-12 text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
