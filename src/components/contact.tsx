import React from "react";
import Wrapper from "./wrapper";

const Contact = () => {
  return (
    <Wrapper className="mt-[200px]">
      <div className="bg-[#292F36] w-full max-w-[1200px] rounded-[80px] h-[374px] mx-auto flex items-center justify-center">
        <div className="text-white text-center px-8 md:px-20">
          <h1 className="text-[32px] md:text-[40px] lg:text-[50px] tracking-wider leading-tight lg:tracking-[125%] mb-4 whitespace-nowrap">
            Wanna Join the Interno
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] mb-8 whitespace-nowrap">
            It is long established will be distracted
          </p>
          <button className="bg-white text-[#292F36] px-6 py-3 rounded-full font-semibold hover:bg-[#f5f5f5] transition">
            Contact with us -&gt;
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
