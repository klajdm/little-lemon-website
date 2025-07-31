import React from "react";
import { NavLink } from "react-router-dom";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-8 pr-12 py-4 bg-white shadow-md sticky top-0 z-50 w-full">
      <NavLink 
        to="/" 
        className="flex items-center no-underline group"
      >
        <img 
          src={littlelemon_logo} 
          alt="Little Lemon Logo" 
          className="h-12 w-auto cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105" 
        />
      </NavLink>
      <ul className="flex list-none m-0 p-0 gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive 
                ? "no-underline text-[#495E57] font-semibold text-base px-4 py-2 rounded bg-[#F4CE14] transition-all duration-300 relative"
                : "no-underline text-[#495E57] font-medium text-base px-4 py-2 rounded transition-all duration-300 relative hover:bg-[#EDEFEE] hover:-translate-y-0.5"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              isActive 
                ? "no-underline text-[#495E57] font-semibold text-base px-4 py-2 rounded bg-[#F4CE14] transition-all duration-300 relative"
                : "no-underline text-[#495E57] font-medium text-base px-4 py-2 rounded transition-all duration-300 relative hover:bg-[#EDEFEE] hover:-translate-y-0.5"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => 
              isActive 
                ? "no-underline text-[#495E57] font-semibold text-base px-4 py-2 rounded bg-[#F4CE14] transition-all duration-300 relative"
                : "no-underline text-[#495E57] font-medium text-base px-4 py-2 rounded transition-all duration-300 relative hover:bg-[#EDEFEE] hover:-translate-y-0.5"
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) => 
              isActive 
                ? "no-underline text-[#495E57] font-semibold text-base px-4 py-2 rounded bg-[#F4CE14] transition-all duration-300 relative"
                : "no-underline text-[#495E57] font-medium text-base px-4 py-2 rounded transition-all duration-300 relative hover:bg-[#EDEFEE] hover:-translate-y-0.5"
            }
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order-online"
            className={({ isActive }) => 
              isActive 
                ? "no-underline text-[#495E57] font-semibold text-base px-4 py-2 rounded bg-[#F4CE14] transition-all duration-300 relative"
                : "no-underline text-[#495E57] font-medium text-base px-4 py-2 rounded transition-all duration-300 relative hover:bg-[#EDEFEE] hover:-translate-y-0.5"
            }
          >
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => 
              isActive 
                ? "no-underline text-[#495E57] font-semibold text-base px-4 py-2 rounded bg-[#F4CE14] transition-all duration-300 relative"
                : "no-underline text-[#495E57] font-medium text-base px-4 py-2 rounded transition-all duration-300 relative hover:bg-[#EDEFEE] hover:-translate-y-0.5"
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
