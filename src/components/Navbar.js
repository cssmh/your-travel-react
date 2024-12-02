import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Login from "./utils/LoginBox";
import { Link } from "react-router-dom";
import Signup from "./utils/SignUp";

const Navbar = () => {
  const searchRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const modalRef = useRef(null);

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
  };

  const toggleLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (showLogin || showSignup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLogin, showSignup]);

  const links = [
    { name: "Home", to: "/" },
    {
      name: "Services",
      dropdown: true,
      items: [
        { name: "Hotel", to: "/hotel" },
        { name: "Car", to: "/car" },
        { name: "Trip", to: "/tour" },
      ],
    },
    { name: "Blog", to: "/blog" },
    { name: "Feature", to: "#feature" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-red-600 text-white px-6 py-4 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-1 md:flex-none">
          <img
            src="/image1.png"
            alt="Logo"
            className=" w-28 sm:w-32 md:w-48 lg:w-72 mr-2"
          />
        </div>
        <ul className="hidden lg:flex space-x-8 items-center z-40">
          {links.map((link, index) => (
            <li
              key={index}
              className={`relative ${link.dropdown ? "dropdown" : ""}`}
            >
              {link.dropdown ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center hover:text-gray-200 focus:outline-none"
                  >
                    {link.name} <IoIosArrowDown className="mt-1" />
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute top-full left-0 bg-white text-black mt-2 rounded-md shadow-lg w-40">
                      {link.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.to}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={link.to} className="hover:text-gray-200">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4 relative z-50">
          <FaSearch className="text-white hover:text-gray-200 cursor-pointer w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" onClick={searchHandler} />
          <div className='search-form absolute top-[250%] md:top-[200%] right-2 lg:right-[7%] bg-white w-[10rem] md:w-[20rem] h-[2rem] md:h-[3rem] flex items-center transform scale-y-0 origin-top' ref={searchRef}>
            <input
              type='search'
              placeholder='Search here..'
              id="search-box"
              className="w-full h-full text-black text-sm p-[1rem] capitalize focus:outline-none"
            />
            <label
              htmlFor='search-box'
              className='cursor-pointer text-sm mr-[1.5rem] text-black fas fa-search'
            />
          </div>
          <button
            onClick={toggleLogin}
            className="bg-white text-red-600 px-3 py-1 rounded text-[8px] md:text-base md:px-4 lg:py-2 hover:bg-gray-200"
          >
            Login / Register
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-48 min-h-screen bg-red-600 text-white z-50 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:hidden`}
      >
        <ul className="mt-7 space-y-4 px-8">
          {links.map((link, index) => (
            <li key={index} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center w-full hover:text-gray-200"
                  >
                    {link.name} <IoIosArrowDown className="ml-1" />
                  </button>
                  {isDropdownOpen && (
                    <ul className="ml-4">
                      {link.items.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.to}
                            className="block px-4 py-2 hover:bg-red-700"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={link.to} className="block hover:text-red-700">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {(showLogin || showSignup) && (
        <div className="fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-50 px-5">
          <div ref={modalRef}>
            {showLogin && <Login onSwitchToSignup={toggleSignup} />}
            {showSignup && <Signup onSwitchToLogin={toggleLogin} />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
