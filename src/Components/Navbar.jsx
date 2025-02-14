import { FaArrowRight } from "react-icons/fa";
import Ticz from "../assets/ticz.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border border-[#197686] flex justify-between items-center rounded-3xl font-jeju mx-18 my-6 px-5 py-2">
      <div className="mr-2 sm:mr-0">
        <img src={Ticz} alt="" className="w-10 h-10 " />
      </div>
      <div className="mx-2 hidden md:block">
        <ul className="flex text-[#b3b3b3]">
          <NavLink to="/" className="mx-3">
            <a href="">Events</a>
          </NavLink>
          <NavLink to="/ticket" className="mx-3">
            <a href="">My Tickets</a>
          </NavLink>
          <NavLink className="mx-3">
            <a href="">About Project</a>
          </NavLink>
        </ul>
      </div>
      <button className="flex items-center bg-white  px-5 py-3 rounded-xl text-[#0A0C11]">
        MY TICKETS <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default Navbar;
