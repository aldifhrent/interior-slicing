import React from 'react';
import Wrapper from '../wrapper';
import { DM_Serif_Display } from 'next/font/google';
import { cn } from '@/lib/util';
import TestimonialCard from '@/components/home/testimonial/testimonial-card';

const DMSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: "400",
});

const Testimonial = () => {
  return (
    <Wrapper className="mt-20 md:mt-[200px] w-full">
      <div className="flex flex-col items-center justify-center bg-[#F4F0EC] rounded-3xl md:rounded-[70px] w-full p-6 md:p-12">
        <h1
          className={cn(
            "text-center text-3xl md:text-[50px] leading-tight md:leading-[125%] tracking-wider w-full mb-8 md:mb-[38px]",
            DMSerif.className
          )}
        >
          What The People Think About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((index) => (
            <TestimonialCard
              key={index}
              name="Nattasha Mith"
              location="Sydney, USA"
              image={`/avatars/avatar-${index}.svg`}
              testimonial="Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonial;