import logoNavbar from '../assets/images/logoNavbar.png';
import BuyButton from './ui/buy-button';

const NavBarComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 sm:h-[75px] h-28 bg-black/40 sm:px-16 px-3 py-3 flex justify-between items-center backdrop-blur-md backdrop-saturate-150 border-b border-white/10">

      <img src={logoNavbar} alt="logo" className="sm:w-[48.79px] w-6 sm:h-[45.464px] h-6" />
      <div className="text-white flex sm:gap-x-[70px] gap-x-2 font-Poppins sm:text-xl text-xs font-normal items-center">
        <span>About Us</span>
        <span>Waitlist</span>
        <span>Cart</span>
        <BuyButton />
      </div>
    </div>
  );
};

export default NavBarComponent;
