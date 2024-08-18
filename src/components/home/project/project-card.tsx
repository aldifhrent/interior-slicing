import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
}

const ProjectCard = ({ image, title, type }: ProjectCardProps) => {
  return (
    <div className="w-full max-w-[525px] mx-auto">
      <div className="flex flex-col">
        <Image src={image} alt={title} width={525} height={548} className="w-full h-auto" />
        <div className="flex justify-between items-center mt-4 md:mt-6">
          <div>
            <p className="text-xl md:text-[25px]">{title}</p>
            <p className="text-lg md:text-[22px]">{type}</p>
          </div>
          <button className="bg-[#F4F0EC] rounded-full p-3 md:px-8 md:py-[26px]">
            <span className="text-xl md:text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;