import Image from "next/image";
import { kosmonavt } from "@/public/assets/images";
const Index = () => {
  return (
    <div className="flex  justify-around mx-auto rounded-[20px] p-14 gap-20   container  bg-[#3B3B3B] mt-10 mb-20 max-xs:flex max-xs:flex-wrap max-xs:py-10 max-xs:px-7 max-xs:gap-8 max-xs:mb-10 ">
      <div>
        <Image src={kosmonavt} alt="kosmonavt" />
      </div>
      <div>
        <h2 className="text-[38px] font-bold text-white leading-[35.2px] max-xs:text-[28px]">Join our weekly <br /> digest</h2>
        <p className="text-white mt-[10px] mb-10 max-xs:mt-[10px] max-xs:mb-10">Get exclusive promotions & updates <br /> straight to your inbox.</p>
        <form className="flex max-xs:block ">
          <input
            type="email"
            required
            placeholder="Enter your email here"
            className="text-[#2B2B2B] p-5 leading-3 rounded-[20px] border-none outline-none max-xs:w-full max-xs:py-[13px] max-xs:mb-4"
          />
          <button
            type="submit"
            className="bg-[#A259FF] text-white  px-10 font-bold rounded-[20px]   lg:left-[-40px] max-xs:w-full max-xs:py-[13px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
