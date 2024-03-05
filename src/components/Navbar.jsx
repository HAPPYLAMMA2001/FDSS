import { useState } from "react";

import { close, menu } from "../assets";
import fdsslogo from "../fdssresources/fdsslogo.png";
import newlogo from "../fdssresources/newlogo.png";
import { navLinks } from "../constants";
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Function to handle click events for navigation
  const handleClick = (title, href) => {
    setActive(title);
    if (href) {
      // If there's an href, navigate externally
      window.location.href = href;
    }
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-dimWhite" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => handleClick(nav.title, nav.href)}
          >
            {/* Conditional rendering for external links */}
            {nav.href ? (
              <a href={nav.href} target="_blank" rel="noopener noreferrer" className="hover-gradient">{nav.title}</a>
            ) : (
              <a href={`#${nav.id}`} className="hover-gradient">{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleClick(nav.title, nav.href)}
              >
                {/* Conditional rendering for external links */}
                {nav.href ? (
                  <a href={nav.href} target="_blank" rel="noopener noreferrer">{nav.title}</a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
