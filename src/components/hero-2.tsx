

import { MdArrowOutward } from "react-icons/md";

const HeroSection2 = () => {
  return (
    <div className="sm:ml-[37px] ml-3 group sm:mt-[156px] mt-[102px]">
      <div className="sm:w-[800px] w-80 justify-start text-white sm:text-5xl text-xl font-normal font-Poppins ">Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.</div>
      <div className="sm:mt-[79px] mt-[32px] flex items-center gap-x-1 text-neutral-200 sm:text-2xl text-xl hover:bg-neutral-200 hover:text-black w-fit p-2 border-b cursor-pointer">
        <span className="font-normal font-Poppins">
          Learn more about Eclypse
        </span>
        <MdArrowOutward className="group-hover:text-neutral-200"/>
      </div>
    </div>
  )
};

export default HeroSection2;
