import React from "react"


export default function Navbar() {
  return (
    <div className="container mx-auto p-10">
    <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div className="flex flex-row justify-center">
      <h1 className="text-4xl text-black">Phuler</h1>
      </div>
      <div className="mt-2">
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">HOME</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">ABOUT</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">SHOP</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">BLOG</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">PAGES</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">CONTACT</a>
        <a href="#" className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
            My Cart (0)
            $0.0
        </a>
            </div>
        </div>
    </div>
   
  );
}