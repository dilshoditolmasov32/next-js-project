import {
  dog,
  cat,
  yumronqoziq,
  darner,
  small_darner1,
  small_darner2,
  robot,
  small_robot1,
  small_robot2,
} from "@/public/assets/images";
import Image from "next/image";
import { title } from "process";

const Index = () => {
  const smallCards = [
    {
      image: dog,
      smallImg1: cat,
      smallImg2: yumronqoziq,
      title: "DSGN Animals",
      text: "MrFox",
    },
    {
      image: darner,
      smallImg1: small_darner1,
      smallImg2: small_darner2,
      title: "Magic Mushrooms",
      text: "Shroomie",
    },
    {
      image: robot,
      smallImg1: small_robot1,
      smallImg2: small_robot2,
      title: "Disco Machines",
      text: "BeKind2Robots",
    },
  ];
  return (
    <div className="container mx-auto pb-20">
      <div className="ml-5 gap-[10px]">
        <h2 className="text-[38px] text-white max-xs:p-3">Trending Collection</h2>
        <p className="text-white text-[22px] max-xs:p-3">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="flex justify-around  flex-wrap gap-[30px] pt-[60px]  ">
        {smallCards?.map((item, index) => (
          <div
            key={index}
            className=" max-w-[330px] rounded-[20px] p-5 "
          >
            <Image src={item.image} alt="animals_image"  />
            <div className="flex items-center gap-4  my-4  text-[#FFFFFF]">
              <p>
                <Image src={item.smallImg1} alt="animals_image" className="w-[100px]" />
              </p>
              <p>
                <Image src={item.smallImg2} alt="animals_image" className="w-[100px]" />
              </p>
              <div className="bg-[#A259FF] rounded-[20px] text-white font-semibold text-[22px] px-4 py-8">1025+</div>
            </div>
            <h5 className="text-white font-bold text-[22px] leading-[30px] mb-[10px]">{item.title}</h5>
            <p className="text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
