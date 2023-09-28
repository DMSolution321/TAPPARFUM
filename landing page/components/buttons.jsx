import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";

export default function Buttons() {
  return (
    <div className='fixed top-[35%] right-0 mr-2 flex flex-col space-y-[70%]'>
      <a
        href='#home'
        className='px-4 py-2 bg-[#Caaca2] text-white rounded-md mr-2 transform rotate-90 flex space-x-[8%]'
      >
        <AiFillHome className='icon text-white' />
        <span className='text-white'>Home</span>
      </a>
      <a
        href='#about'
        className='px-4 py-2 bg-[#Caaca2] text-white rounded-md mr-2 transform rotate-90 flex space-x-[8%]'
      >
        <GoProjectSymlink className='icon text-white' />
        <span className='text-white'>About</span>
      </a>
      <a
        href='#projects'
        className='px-4 py-2 bg-[#Caaca2] text-white rounded-md mr-2 transform rotate-90 flex'
      >
        <AiFillHome className='icon text-white' />
        <span className='text-white'>Projects</span>
      </a>
    </div>
  );
}
