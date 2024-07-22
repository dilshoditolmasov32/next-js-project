import Image from "next/image";
import Link from "next/link";
import { socialMedia, logo } from "@/public/assets/images";

const Index = () => {
 
  return (
    <footer className="bg-[rgb(59,59,59)]  ">
    <div className="container   mx-auto  lg:flex lg:justify-around  lg:pt-10 lg:pb-7 md:flex md:flex-wrap md:gap-5 md:justify-between sm:p-6 xs:p-5">
     <div className="sm:mb-8 xs:mb-7">
      <Link href={"/"}><Image src={logo} alt="logo"/></Link>
      <p className="mb-5 text-[#CCCCCC] w-[240px] mt-[25px]">NFT marketplace UI created with Anima for Figma.</p>
      <p className="mb-5 text-[#CCCCCC]">Join our community</p>
      <h5> <Image src={socialMedia} alt="social-media"/> </h5>
     </div>
     <div  className="sm:mb-8 xs:mb-7">
      <h4 className="text-white font-semibold text-[22px] mb-[25px]">Explore</h4>
     <p className="mb-5"> <Link className="text-[#CCCCCC]" href={"/marketplace"}>Marketplace</Link> </p>
      <p className="mb-5"><Link className="text-[#CCCCCC]" href={"/rangking"}>Rankings</Link></p>
      <p className="mb-5"><Link className="text-[#CCCCCC]" href={"/wallet"}>Connect a wallet</Link></p>
     </div>
     <div>
      <h4  className="text-white font-semibold text-[22px] mb-[25px]">Join our weekly digest</h4>
      <p className="mb-5 text-[#CCCCCC] w-[300px]">Get exclusive promotions & updates straight to your inbox.</p>
      <div className="lg:flex lg:items-center">

     
      <form >
        <input type="email" required  placeholder="Enter your email here" className="text-[#2B2B2B] p-5 leading-3 rounded-[20px] border-none outline-none xs:w-full" />
        <button type="submit" className="bg-[#A259FF] text-white  px-10 font-bold rounded-[20px]   lg:left-[-40px] xs:w-full  xs:flex xs:justify-center p-5 xs:mt-5 xs:px-6">Subscribe</button>

      </form>
      </div>
     </div>
    </div>
    <h3 className="text-[#CCCCCC] container lg:pl-5 lg:mt-5 lg:pb-10 lg:text-center md:text-center md:mt-5 md:pb-4 sm:mt-10 sm:text-left sm:p-6 xs:text-center ">Ⓒ NFT Market. Use this template freely.</h3>
    </footer>
  );
};

export default Index;
