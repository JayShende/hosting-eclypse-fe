import { MdArrowOutward } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";

interface FooterSectionProps{
  scrollTop:() => void
}

const FooterSection = ({
  scrollTop
}:FooterSectionProps) => {


  return (
    
    <>
    <div className="sm:grid grid-cols-4 mt-[71px] mx-[50px] p-6  gap-6 font-Poppins text-zinc-300 hidden">
      <div className=" h-10 flex flex-col">
       <div className="flex gap-x-1">
        <span className="text-3xl  font-medium ">Eclypse</span>
        <MdArrowOutward className=" text-zinc-300 text-xl " />
       </div>
       <span className="font-medium  text-sm mt-[67px]">
        Home  /  About /  Buy /  Our Customers /  Contacts
       </span>
      </div>
      <div className="flex flex-col">
        <span className="   mt-12 opacity-60 ">CONTACT</span>
        <span className="text-xl font-medium  mt-[8px]">+91 123-456-7890</span>
        <span className="opacity-60  font-medium  mt-[32px]">EMAIL</span>
        <span className="mt-[8px]">eclypse@gmail.com</span>
      </div>
      <div className=""></div>
      <div className=" flex flex-col items-end justify-between">
        <div className="p-2 w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"><FaArrowUpLong className="text-xl text-black" /></div>
        <span className="opacity-60">© Eclypse 2025</span>
      </div>

    </div>

    <div className="grid grid-cols-3 mt-10 mx-3 p-3  gap-6 font-Poppins text-zinc-300 sm:hidden ">
      <div className=" h-10 flex flex-col">
       <div className="flex gap-x-1">
        <span className="text-2xl  font-medium ">Eclypse</span>
        <MdArrowOutward className=" text-zinc-300" />
       </div>
       <span className="font-medium  text-[10px] mt-5">
        Home  /  About /  Buy /  Our Customers /  Contacts
       </span>
      </div>
      <div className="flex flex-col">
        <span className="   mt-12 opacity-60 text-[10px]">CONTACT</span>
        <span className="text-[8px] font-medium  mt-[8px]">+91 123-456-7890</span>
        <span className="opacity-60  font-medium  mt-5 text-[15px]">EMAIL</span>
        <span className="mt-2 text-[10px]">eclypse@gmail.com</span>
      </div>

      <div className=" flex flex-col items-end justify-between">
        <div className="p-2 w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
        onClick={()=>{
         scrollTop();
        }}
        ><FaArrowUpLong className="text-xl text-black" /></div>
        <span className="opacity-60 text-[11px]">© Eclypse 2025</span>
      </div>

    </div>
    </>
  )
};

export default FooterSection;
