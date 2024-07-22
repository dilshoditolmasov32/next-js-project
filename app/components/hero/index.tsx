import Image from "next/image";
import {
  hero_icon,
  hero_img,
  hero_icon_samolyot,
} from "@/public/assets/images";

const Index = () => {
  return (
    <div className="container mx-auto flex justify-around gap-[30px] py-20  max-xs:py-10 px-5 max-xs:flex max-xs:flex-wrap max-xs:flex-col-reverse">
      <div>
        <h2 className="text-[67px]  font-bold text-white leading-[74px] max-w-[500px] mb-5 max-xs:text-[28px] max-xs:p-3   max-xs:mb-[10px] max-xs:leading-[39.2px]">
          Discover digital art & Collect NFTs
        </h2>
        <p className="text-white text-[22px] leading-[35.2px] max-w-[500px] max-xs:p-3">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <button className="bg-[#A259FF]  text-white border-none rounded-[20px] py-5 px-10 outline-none flex gap-3 mt-[30px] items-center max-xs:w-full max-xs:flex max-xs:justify-center max-xs:px-3">
          <Image src={hero_icon_samolyot} alt="hero-icon" />
          Get Started
        </button>
        <div className="flex gap-7 mt-[30px] text-white max-xs:px-3 ">
          <div>
            <span className="font-semibold text-[28px]">240k+ </span>
            <p className="text-[24px]">Total Sale</p>
          </div>
          <div>
            <span className="font-semibold text-[28px]">100k+ </span>
            <p className="text-[24px]">Auctions</p>
          </div>
          <div>
            <span className="font-semibold text-[28px]">240k+ </span>
            <p className="text-[24px]">Artists</p>
          </div>
        </div>
      </div>
      <div>
        <div className=" rounded-[20px]">
          <Image src={hero_img} alt="hero-image" />
          <div className="px-5 py-[22px] bg-[#3B3B3B] rounded-br-[20px] rounded-bl-[20px]">
            <h5 className="mb-[10px] text-white">Space Walking</h5>
            <p className="flex items-center gap-3 text-white">
              <Image src={hero_icon} alt="hero-icon" />
              Animakid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
