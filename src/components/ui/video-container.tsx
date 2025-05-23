import Hero_Video from "../../assets/video/Hero_Video.mp4"

const VideoHeroSection = () => {
  return (
    <div className="w-fit h-auto flex items-center justify-center">
      <div className="relative sm:w-[93vw] w-fit sm:h-[530px] h-80 sm:mt-[27px]  sm:mx-[37px] mx-1">
        <video
          src={Hero_Video}
          autoPlay
          loop
          muted
          playsInline
          className="sm:w-full w-full sm:h-full h-80 object-cover rounded-md"
        />
        <div className="absolute sm:bottom-6 bottom-1  right-4   text-white sm:text-lg text-sm  font-semibold  sm:px-4 px-0 py-2 rounded-xl font-Poppins">
          A silhouette worth remembering
        </div>
      </div>
    </div>
  );
};

export default VideoHeroSection
