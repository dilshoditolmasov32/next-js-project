import { smallAvatar1, smallAvatar3, smallAvatar2, galaxy, odena, astronom, eye } from "@/public/assets/images";
  import Image from "next/image";
import { title } from "process";
  
  const Index = () => {
    const smallCards = [
      {
        index: 1,
        image: galaxy,
        avatar:smallAvatar1,
        title: "Distant Galaxy",
        text: "MoonDancer",
      },
      {
        index: 2,
        image: odena,
        avatar:smallAvatar2,
        title: "Life On Edena",
        text: "NebulaKid",
      },
      {
        index: 3,
        image: astronom,
        avatar:smallAvatar3,
        title: "AstroFiction",
        text: "Spaceone",
      },
   
    ];
    return (
      <div className="container mx-auto pb-20" >
        <div className="flex justify-between items-end max-xs:flex max-xs:flex-wrap" >
          <div className=" ml-6 gap-[10px]">
            <h4 className="text-[38px] text-white">Discover More NFTs</h4>
            <p className="text-white text-[22px]">Explore new trending NFTs</p>
          </div>
          <div className="max-xs:w-[100%] max-xs:flex max-xs:text-center max-xs:px-5 max-xs:mt-10 ">
            <button className="flex gap-5 rounded-[20px] py-5 px-10 text-white border-2 border-[#A259FF] max-xs:flex max-xs:justify-center max-xs:w-full  ">
              <Image src={eye} alt="eye" />
              See All
            </button>
          </div>
        </div>
  
        <div className="flex justify-around  flex-wrap gap-[30px] pt-[60px]  ">
          {smallCards?.map((item) => (
            <div
              key={item.index}
              className=" rounded-[20px] p-5 bg-[#3B3B3B] w-[330px] "
            >
            
              <div className="flex justify-center">
                <Image src={item.image} alt={item.title} />
              </div>
              <div className="py-5 px-7">

             
              <h5 className="text-[#FFFFFF] text-[22px] font-bold">{item.title}</h5>
              <p className="flex items-center gap-3 text-[#FFFFFF] mt-1">
                <span className="text-[#858584] pr-3"> <Image src={item.avatar} alt="avatar" /></span>
                {item.text}
              </p>

              <div className="flex justify-between mt-[25px]">
                <div>
                    <p className="text-[#858584] text-[12px] leading-[13.2px] mb-2">Price</p>
                    <span className="leading-[22.4px] text-white">1.63 ETH</span>
                </div>
                <div>
                    <p className="text-[#858584] text-[12px] leading-[13.2px] mb-2">Highest Bid</p>
                    <span className="leading-[22.4px] text-white">0.33 wETH</span>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Index;
  