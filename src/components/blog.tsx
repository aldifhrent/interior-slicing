import React from 'react'
import Wrapper from './wrapper'
import BlogCard from './home/blog/blog-card'
import { DM_Serif_Display, Jost } from 'next/font/google';
import { cn } from '@/lib/util';

const DMSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const JostFont = Jost({
  subsets: ["latin"],
});

const Blog = () => {
  return (
    <Wrapper className='flex flex-col items-center mt-[200px]'>
      <h1 className={cn('text-center text-[40px] md:text-[50px] leading-[125%] tracking-[2%] text-[#292F36]', DMSerif.className)}>Article & News</h1>
      <p className={cn('text-center w-full text-[22px] leading-[150%] tracking-[1%]', JostFont.className)}>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
      <div className="flex flex-col lg:flex-row mt-[52px] gap-x-[27px] mx-2">
        <BlogCard image={'/blogs/01.svg'} type={'Kitchen Design'} title={'Lets Get Solution For Bulding Construction Work'} date={'26 December 2022'}/>
        <BlogCard image={'/blogs/01.svg'} type='Living Design' title='Low Cost Latest Invented Interior Designing Ideas.' date='22 December 2022'/>
        <BlogCard image={'/blogs/01.svg'} type='Interior Design' title='Best For Any Office & Business Interior Solution' date='25 December 2022'/>
      </div>
    </Wrapper>
  )
}

export default Blog
