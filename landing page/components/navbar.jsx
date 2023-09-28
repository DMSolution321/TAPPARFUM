import React, { useState } from "react";
import { Float } from "@react-three/drei";
import { BiSolidDownArrow } from "react-icons/bi";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav
        className='fixed top-0 left-0 w-full h-16 bg-transparent text-white flex justify-between items-center z-50 py-4 px-8'
        onMouseLeave={() => setIsHovered(false)}
        style={{
          height: isHovered ? "80px" : "16px", // Increase the height on hover
          transition: "height 0.3s", // Add a smooth transition effect
        }}
      >
        <h1 className={`text-2xl font-bold ${isHovered ? "block" : "hidden"}`}>
          Logo
        </h1>
        <div className={`${isHovered ? "block" : "hidden"}`}>
          <a
            href='#home'
            className='px-4 py-2 bg-[#Caaca2] text-white rounded-md mr-2'
          >
            Home
          </a>
          <a
            href='#about'
            className='px-4 py-2 bg-[#Caaca2] text-white rounded-md mr-2'
          >
            About
          </a>
          <a
            href='#projects'
            className='px-4 py-2 bg-[#Caaca2] text-white rounded-md mr-2'
          >
            Projects
          </a>
          <a
            href='#contact'
            className='px-4 py-2 bg-[#Caaca2] text-white rounded-md'
          >
            Contact
          </a>
        </div>
        <BiSolidDownArrow
          size={20}
          className='ml-2 mt-2 text-white text-4xl cursor-pointer fixed top-0 left-0'
          onMouseEnter={() => setIsHovered(true)}
          style={{
            opacity: isHovered ? "0" : "1",
          }}
        />
      </nav>
    </>
  );
}

export default Navbar;
