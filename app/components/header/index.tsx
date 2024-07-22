"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/logo.svg";
import user from "../../../public/assets/images/user.svg";
import burgerMenu from "../../../public/assets/images/burger-menu.svg";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      path: "/marketplace",
      content: "Marketplace",
    },
    {
      path: "/ranking",
      content: "Rankings",
    },
    {
      path: "/wallet",
      content: "Connect a wallet",
    },
  ];

  return (
    <header className="bg-[#2B2B2B] py-5">
      <nav className="container mx-auto px-5 flex justify-between items-center md:flex md:justify-between md:gap-5 md:px-3">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
      
        <div>
        <button
          className="xl:hidden lg:hidden md:block sm:block "
          onClick={handleClick}
        >
          <Image src={burgerMenu} alt="burger-menu" />
        </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } xl:flex xl:items-center gap-3 `}
          >
            {links.map((link, index) => (
              <li key={index} className="px-3 py-5 font-semibold text-white">
                <Link href={link.path}>{link.content}</Link>
              </li>
            ))}
            <button className="bg-[#A259FF] rounded-[20px] py-5 px-7">
              <Link
                href="/signup"
                className="flex items-center text-white gap-3"
              >
                <Image src={user} alt="user-image" /> Sign Up
              </Link>
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Index;
