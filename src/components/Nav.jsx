import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mt-4 mx-[100px]">
      <ul className="flex text-[#ababa8] text-[1.2rem] gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative  after:content-[""] after:absolute after:w-full after:h-[0.175rem] after:bg-green-500 after:left-0 after:bottom-0  ${
                isActive ? "after:scale-1 text-white" : "after:scale-0"
              } after:transition-all hover:after:origin-[0%_100%] hover:after:scale-[1] hover:after:transition hover:after:transform hover:after:duration-[0.3s] hover:after:ease-in hover:duration-[0.3s]hover:transition hover:ease-in hover:text-white hover:duration-[0.3s]`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative  after:content-[""] after:absolute after:w-full after:h-[0.175rem] after:bg-green-500 after:left-0 after:bottom-0  ${
                isActive ? "after:scale-1 text-white" : "after:scale-0"
              } after:transition-all hover:after:origin-[0%_100%] hover:after:scale-[1] hover:after:transition hover:after:transform hover:after:duration-[0.3s] hover:after:ease-in hover:duration-[0.3s]hover:transition hover:ease-in hover:text-white hover:duration-[0.3s]`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `relative  after:content-[""] after:absolute after:w-full after:h-[0.175rem] after:bg-green-500 after:left-0 after:bottom-0  ${
                isActive ? "after:scale-1 text-white" : "after:scale-0"
              } after:transition-all hover:after:origin-[0%_100%] hover:after:scale-[1] hover:after:transition hover:after:transform hover:after:duration-[0.3s] hover:after:ease-in hover:duration-[0.3s]hover:transition hover:ease-in hover:text-white hover:duration-[0.3s]`
            }
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative  after:content-[""] after:absolute after:w-full after:h-[0.175rem] after:bg-green-500 after:left-0 after:bottom-0  ${
                isActive ? "after:scale-1 text-white" : "after:scale-0"
              } after:transition-all hover:after:origin-[0%_100%] hover:after:scale-[1] hover:after:transition hover:after:transform hover:after:duration-[0.3s] hover:after:ease-in hover:duration-[0.3s]hover:transition hover:ease-in hover:text-white hover:duration-[0.3s]`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `relative  after:content-[""] after:absolute after:w-full after:h-[0.175rem] after:bg-green-500 after:left-0 after:bottom-0  ${
                isActive ? "after:scale-1 text-white" : "after:scale-0"
              } after:transition-all hover:after:origin-[0%_100%] hover:after:scale-[1] hover:after:transition hover:after:transform hover:after:duration-[0.3s] hover:after:ease-in hover:duration-[0.3s]hover:transition hover:ease-in hover:text-white hover:duration-[0.3s]`
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
