import grid_frame_3 from "../assets/video/grid_frame_3.mp4";
import frame_18 from "../assets/images/frame_18.png";
import pic_1 from "../assets/images/pic_1.png";
import pic_2 from "../assets/images/pic_2.png";
import logo_2 from "../assets/images/logo_2.png";
import logoNavbar from "../assets/images/logoNavbar.png";
import { ImageHoverFadeText } from "./ui/image-hover";
import { HoverImage } from "./ui/logo-hover";
const GridSection = () => {
  return (
    <>
      <div className="w-fit ml-[37px] mt-[150px] hidden sm:block">
        <div className="flex  gap-[31px]">
          <video
            src={grid_frame_3}
            autoPlay
            loop
            muted
            playsInline
            className="w-[60vw] h-[498px] object-cover rounded-md "
          />
          <img src={frame_18} alt="frame_18" className="h-[498px] " />
        </div>
        <div className="grid grid-cols-3 gap-13 mt-7">
          <ImageHoverFadeText
            imageUrl={pic_1}
            hoverText="Discreet side pockets with clean finish"
            altText="image"
          />

          <ImageHoverFadeText
            imageUrl={pic_2}
            hoverText="Hand-cut and assembled in small batches"
            altText="image"
          />
          <HoverImage
            defaultImage={logo_2}
            hoverImage={logoNavbar}
            altText="Example Image"
          />
        </div>
      </div>
      <div className="w-fit mx- mt-[110px] block sm:hidden">
        <div className="">
          <video
            src={grid_frame_3}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[498px]  object-cover rounded-md "
          />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <ImageHoverFadeText
            imageUrl={frame_18}
            hoverText="Discreet side pockets with clean finish"
            altText="image"
            width="w-28"
            height="h-36"
          />

          <ImageHoverFadeText
            imageUrl={pic_1}
            hoverText="Hand-cut and assembled in small batches"
            altText="image"
            width="w-28"
            height="h-36"
          />
           <ImageHoverFadeText
            imageUrl={pic_2}
            hoverText="Hand-cut and assembled in small batches"
            altText="image"
            width="w-28"
            height="h-36"
          />
        </div>
      </div>
    </>
  );
};

export default GridSection;
