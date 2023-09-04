"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="flex relative">
        <div className=" w-[35%] pl-12  max-md:pl-3">
          <Image
            src="logo.svg"
            width={0}
            height={0}
            priority
            alt=''
            className="w-[30%] max-md:w-[70%]"
          />
        </div>
        <div
          className={
            isMenuOpen
              ? " flex max-md:absolute max-md:h-[40vh] max-md:flex-col max-md:right-0 max-md:top-[4em] animate-wiggle"
              : "hidden w-[65%] md:flex"
          }
        >
          <ul className="w-[100%] text-[#131313] text-2xl gap-8 font-genos flex justify-evenly items-center max-md:flex-col">
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="/Search" className="flex gap-1">
                {" "}
                <Image
                  src="search-normal.svg"
                  width={0}
                  height={0}
                  alt=''
                  className="w-[20%]"
                />
                Search
              </a>
            </li>
            <li>
              {" "}
              <a href="#">About us</a>
            </li>
            <li>
              <a  href="/Donate">
                <div className="navbarDonateBtn flex justify-evenly">
                  <div className="bg-[#fff] flex rounded py-2 px-4">
                  <p className="NavDonateText">donate </p>
                  <Image src="Vector.svg" width={30} height={40} alt=''/>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div className="flex ml-4 justify-center item-center ">
            {/* <Image src='home.svg' width={250} height={0} /> */}
          </div>
        </div>
        <div className="flex justify-around item-center pr-12 max-md:pr-2 max-md:gap-8">
          <button className="md:hidden">
            <FaBars className="text-red" onClick={toggleMenu} />
          </button>
          {/* <button></></button> */}
          <div className="bg-orang-500 flex justify-center items-center">
            <Image
              src="sun.svg"
              width={0}
              height={0}
              alt=''
              className="w-[2em] max-md:max-w-[2em] max-md:min-w-[2em]"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
