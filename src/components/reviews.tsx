import { FaQuoteLeft } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa6";
import r1 from "../assets/images/reviews/r1.png";
import r2 from "../assets/images/reviews/r2.png";
import r3 from "../assets/images/reviews/r3.png";
const Reviews = () => {
  return (
    <>
      <div className="sm:mt-[193px] mt-20  sm:ml-[50px] m-2">
        <span className="text-white/80 font-medium font-Roboto ">
          OUR CUSTOMERS
        </span>
        <div className="grid grid-cols-[60%_1fr] sm:mt-[90px] mt-10 ">
          <div className=" h-10 sm:ml-[66px] ml-3 flex flex-col ">
            <div className="flex ">
              <FaQuoteLeft className="sm:text-4xl text-xl text-white" />
              <span className="text-neutral-300 sm:text-4xl text-xl font-Poppins sm:w-[750px] w-[300px] sm:ml-[22px] ml-2">
                Understated, but unforgettable. It <br/> feels like it was made
                for me
              </span>
            </div>
            <span className="sm:mt-[88px] mt-5 sm:text-2xl text-xs text-stone-300 font-Poppins">
              Random Woman
            </span>
            <span className="text-neutral-600 font-medium font-Poppins mt-[12px]">
              NY, USA
            </span>
          </div>
          <div className="flex flex-col gap-y-[25px] items-center ">
            <div className="flex items-center gap-x-3">
              <FaCaretLeft className="text-white sm:text-5xl text-3xl" />
              <img src={r1} alt="person-1" className="sm:w-32 w-14 sm:h-32 h-14" />
            </div>
            <img src={r2} alt="person-1" className="sm:w-16 sm:h-16 w-8 h-8 ml-12" />
            <img src={r3} alt="person-1" className="w-8 h-8 ml-12" />
          </div>
        </div>
      </div>
      <div className=" h-0 sm:mx-[66px] mx-3 outline-1 outline-offset-[-0.50px] outline-neutral-700 sm:mt-[137px] mt-20"></div>
    </>
  );
};

export default Reviews;
