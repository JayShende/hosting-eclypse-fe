import { FaArrowDown } from "react-icons/fa6";
const ProductInfo = () => {
  return (
    <div className=" sm:mx-[50px] mx-3 mt-[184px]">
      <div className="flex justify-between items-center">
        <span className="sm:text-3xl text-xl text-white font-normal font-Poppins ">
          Size & Fit
        </span>
        <FaArrowDown className="text-white text-3xl" />
      </div>
      <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-neutral-700 mt-[40px]"></div>

      <div className="flex justify-between items-center mt-[75px]">
        <span className="sm:text-3xl text-xl text-white font-normal font-Poppins ">
          Delivery & Returns
        </span>
        <FaArrowDown className="text-white text-3xl" />
      </div>
      <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-neutral-700 mt-[40px]"></div>
      <div className="flex justify-between items-center mt-[75px]">
        <span className="sm:text-3xl text-xl text-white font-normal font-Poppins ">
          How This Was Made
        </span>
        <FaArrowDown className="text-white text-3xl" />
      </div>
      <div className="w-full h-0  outline-1 outline-offset-[-0.50px] outline-neutral-700 mt-[40px]"></div>
    </div>

    
  );
};

export default ProductInfo;
