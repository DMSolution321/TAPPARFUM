import React, { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer
      className='fixed bottom-0 left-0 w-full h-16 bg-transparent text-white flex justify-between items-center z-50'
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: isHovered ? "100px" : "16px", // Increase the height on hover
        transition: "height 0.3s", // Add a smooth transition effect
      }}
    >
      <div
        className='text-xl font-bold mx-4'
        style={{ display: isHovered ? "block" : "none" }}
      >
        Footer Content
        <div className='text-sm mt-2'>
          Address: 123 Main Street, City, Country
        </div>
      </div>
      <div
        className='text-sm mx-4'
        style={{ display: isHovered ? "block" : "none" }}
      >
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
      <BiSolidUpArrow
        size={20}
        className='mr-2 mb-2 text-white text-4xl cursor-pointer fixed bottom-0 right-0'
        onMouseEnter={() => setIsHovered(true)}
        style={{
          opacity: isHovered ? "0" : "1",
        }}
      />
    </footer>
  );
}

export default Footer;
