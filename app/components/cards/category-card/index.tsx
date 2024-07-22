import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8 } from "@/public/assets/images"
import Image from "next/image"
const Index = () => {
    const boxs=[
        {
            image:icon1,
            title:"Art"
        },
        {
            image:icon2,
            title:"Collectibles"
        },
        {
            image:icon3,
            title:"Music"
        },
        {
            image:icon4,
            title:"Photography"
        },
        {
            image:icon5,
            title:"Video"
        },
        {
            image:icon6,
            title:"Utility"
        },
        {
            image:icon7,
            title:"Sport"
        },
        {
            image:icon8,
            title:"Virtual Worlds"
        },
       
    ]
  return (
    <div className="  container mx-auto pb-20 max-xs:pb-10">
        <h4 className="font-bold text-white text-[38px] mt-16 ml-5 max-xs:text-[28px] leading-[39.2px] max-xs:mt-10">Browse Categories</h4>

        <div className="flex flex-wrap gap-[30px] justify-around pt-14 ">
         {
            boxs?.map((item, index)=>(
                <div className="bg-[#3B3B3B] rounded-[20px] max-w-[240px] w-full max-xs:w-[150px] max-xs:mx-2" key={index}>
                <Image src={item.image} alt="icons"/>
                <p className="py-5 px-[30px] font-bold text-white ">{item.title} </p>
            </div>
            ))
         }
        </div>

    </div>
  )
}

export default Index