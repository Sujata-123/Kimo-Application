import { navLinks } from "./data";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[url('/img/Head.svg')] h-[560px]">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-8 lg:pt-6 md:pt-6 pt-0">
        <div className="relative flex items-center justify-between h-16 bg-white lg:rounded-xl md:rounded-xl rounded-none">
          {/* Logo or branding */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={"/img/Aloha.svg"}
              alt="copy"
              width={10}
              height={10}
              className="w-full ml-2"
            />
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <Link
                        href={url}
                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-black"
                      >
                        {text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Menu */}
          <button className="bg-[#008080] text-white rounded-lg px-6 pb-3 pt-2 mr-3 lg:block md:block hidden">
            Book A Trip
          </button>
          {/* Mobile Menu */}
          <div className="md:hidden pr-3">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-black focus:outline-none focus:text-black"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes color="black" size={24} />
              ) : (
                <FaBars color="black" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
          <button
            onClick={toggleMenu}
            className="absolute top-0 right-0 m-4 text-black text-2xl focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes color="black" />
          </button>
          <ul className="py-8 px-4 space-y-4 text-center">
            {navLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link
                    href={url}
                    className="text-black block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="text-center md:text-8xl text-7xl text-white lg:text-[152px] m-auto max-w-2xl mt-20 text-gradient">
        Welcome to Hawaii
      </div>
    </nav>
  );
};

export default Navbar;
