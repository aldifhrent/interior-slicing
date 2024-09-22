import React from "react";

const Contact = () => {
  return (
    <section className="mt-[200px]">
      <div className="container mx-auto ">
        <div className="bg-[#292F36]  w-full h-full mx-auto flex items-center justify-center rounded-lg ">
          <div className="flex flex-col items-center justify-center text-white text-center  p-12">
            <h1 className="text-[25px] md:text-[32px] lg:text-[50px] leading-tight lg:tracking-[125%] mb-4 whitespace-nowrap">
              Wanna Join the Interno
            </h1>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] mb-8 whitespace-nowrap">
              It is long established will be distracted
            </p>
            <button className="bg-white text-[#292F36] px-6 py-3 rounded-full font-semibold hover:bg-[#dedede] transition">
              Contact with us -&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
