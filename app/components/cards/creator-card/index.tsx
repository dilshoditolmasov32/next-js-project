import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  samolyot,
} from "@/public/assets/images";
import Image from "next/image";

const Index = () => {
  const smallCards = [
    {
      index: 1,
      image: avatar1,
      name: "Keepitreal",
      price: "34.53 ETH",
    },
    {
      index: 2,
      image: avatar2,
      name: "DigiLab",
      price: "34.53 ETH",
    },
    {
      index: 3,
      image: avatar3,
      name: "Keepitreal",
      price: "34.53 ETH",
    },
    {
      index: 4,
      image: avatar4,
      name: "GravityOne",
      price: "34.53 ETH",
    },
    {
      index: 5,
      image: avatar5,
      name: "Juanie",
      price: "34.53 ETH",
    },
    {
      index: 6,
      image: avatar6,
      name: "BlueWhale",
      price: "34.53 ETH",
    },
    {
      index: 7,
      image: avatar7,
      name: "mr fox",
      price: "34.53 ETH",
    },
    {
      index: 8,
      image: avatar8,
      name: "Shroomie",
      price: "34.53 ETH",
    },
    {
      index: 9,
      image: avatar9,
      name: "robotica",
      price: "34.53 ETH",
    },
    {
      index: 10,
      image: avatar10,
      name: "RustyRobot",
      price: "34.53 ETH",
    },
    {
      index: 11,
      image: avatar11,
      name: "animakid",
      price: "34.53 ETH",
    },
    {
      index: 12,
      image: avatar12,
      name: "Dotgu",
      price: "34.53 ETH",
    },
  ];
  return (
    <div className="container mx-auto pb-20 max-xs:pb-10">
      <div className="flex justify-between items-end   max-xs:flex-col  max-xs:grid max-xs:grid-rows-2">
        <div className="ml-5 gap-[10px]">
          <h4 className="text-[38px] text-white">Top creators</h4>
          <p className="text-white text-[22px]">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div>
          <button className="flex gap-5 rounded-[20px] py-5 px-10 text-white border-2 border-[#A259FF] max-xs:w-[95%] max-xs:mx-3 max-xs:flex max-xs:justify-center max-xs:text-center ">
            <Image src={samolyot} alt="samolyot" />
            View Rankings
          </button>
        </div>
      </div>

      <div className="flex justify-around  flex-wrap gap-[30px] pt-[60px] max-xs:flex max-xs:flex-reverse  ">
        {smallCards?.map((item, index) => (
          <div
            key={index}
            className=" w-[240px] rounded-[20px] p-5 bg-[#3B3B3B] max-xs:w-full max-xs:flex max-xs:gap-5 max-xs:mx-5 max-xs:items-start "
          >
            <span className="bg-[#2B2B2B] text-[#858584] w-[30px] py-1 px-[10px]  rounded-[50%] max-xs:flex max-xs:justify-center max-xs:items-center  max-xs:absolute">
              {item.index}
            </span>
            
            <div className="flex justify-center">
              <Image src={item.image} alt={item.name} className="w-[80px]" />
            </div>
            <div className="max-xs:block ">

            
            <h5 className="text-[#FFFFFF] text-center pt-5  max-xs:w-6">{item.name}</h5>
            <p className="text-[#FFFFFF]">
              <span className="text-[#858584] pr-3">Total Sales:</span>
              {item.price}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
