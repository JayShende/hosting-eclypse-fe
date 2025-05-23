import HeroSection from "../components/hero-section";
import NavBarComponent from "../components/navbar";
import HeroSection2 from "../components/hero-2";
import GridSection from "../components/grid-section";
import ProductShop from "../components/product-shop";
import ProductInfo from "../components/product-info";
import Reviews from "../components/reviews";
import FooterSection from "../components/footer-section";
import  { useRef } from 'react';
function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToDiv = () => {
    console.log("Inside the fun");
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-screen h-auto bg-zinc-950 flex flex-col">
      <NavBarComponent />
      <HeroSection mainRef={targetRef}/>
      <HeroSection2 />
      <GridSection />
      <ProductShop />
      <ProductInfo />
      <Reviews />
      <FooterSection scrollTop={scrollToDiv}/>
    </div>
  );
}

export default HomePage;
