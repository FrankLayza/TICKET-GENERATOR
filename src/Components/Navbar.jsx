import { FaArrowRight } from "react-icons/fa";
import Ticz from "../assets/ticz.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border border-[#197686] flex items-center justify-between rounded-3xl font-jeju mx-4 my-4 px-4 py-2 sm:px-5 sm:py-3">
      <div className="mr-auto">
        <img src={Ticz} alt="Logo" className="w-10 h-10" />
      </div>
      <div className="hidden md:block">
        <ul className="flex text-[#b3b3b3]">
          <NavLink to="/" className="mx-3">
            Events
          </NavLink>
          <NavLink to="/ticket" className="mx-3">
            My Tickets
          </NavLink>
          <NavLink to="/about" className="mx-3">
            About Project
          </NavLink>
        </ul>
      </div>
      <div className="ml-auto">
        <button className="flex items-center bg-white px-4 py-2 sm:px-5 sm:py-3 rounded-xl text-[#0A0C11]">
          MY TICKETS <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
