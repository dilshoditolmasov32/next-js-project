import {
  icon9, icon10, icon11
  } from "@/public/assets/images";
  import Image from "next/image";
  
  const Index = () => {
    const smallCards = [
      {
        index: 1,
        image: icon9,
        title: "Setup Your wallet",
        text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
      },
      {
        index: 2,
        image: icon10,
        title: "Create Collection",
        text: "Upload your work and setup your collection. Add a description, social links and floor price.",
      },
      {
        index: 3,
        image: icon11,
        title: "Start Earning",
        text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      },
    
    ];
    return (
      <div className="container mx-auto pb-20 max-xs:pb-10" >
          <div className="ml-5 gap-[10px]">
            <h4 className="text-[38px] text-white">How it works</h4>
            <p className="text-white text-[22px]">Find out how to get started</p>
          </div>
         
  
        <div className="flex justify-around  flex-wrap gap-[30px] pt-[60px]  ">
          {smallCards?.map((item, index) => (
            <div
              key={index}
              className=" w-[330px] rounded-[20px] p-5 bg-[#3B3B3B] "
            >
            
              <div className="flex justify-center">
                <Image src={item.image} alt="icons" />
              </div>
              <h5 className="text-[#FFFFFF] font-bold text-center pt-5">{item.title}</h5>
              <p className="text-[#FFFFFF] px-[30px] text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Index;
  