import VideoHeroSection from "./ui/video-container";
import { FaRegRegistered } from "react-icons/fa";

interface HeroSectionProps{
  mainRef:React.RefObject<HTMLDivElement | null>
}

const HeroSection = ({
  mainRef
}:HeroSectionProps) => {
  return (
    <div className="w-screen" ref={mainRef}>
      <div className="mt-40 flex justify-between items-end mb-2">
        <div className="flex">
          <div className="sm:text-8xl text-3xl text-white sm:ml-[44px] ml-[18px] font-normal font-Poppins">
            Eclypse
          </div>
          <FaRegRegistered className="text-lg text-white" />
        </div>
        <div className="text-white text-sm font-medium font-Poppins sm:mr-[50.6px] mr-[18px] ">
          © 2025
        </div>
      </div>
      <VideoHeroSection />
    </div>
  );
};

export default HeroSection;
