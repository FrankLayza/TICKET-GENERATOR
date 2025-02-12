import { FaArrowRight } from "react-icons/fa";
import Ticz from "../assets/ticz.svg";

const Navbar = () => {
  return (
    <div className="border border-[#197686] flex justify-between items-center rounded-3xl font-jeju mx-18 my-6 px-5 py-2">
      <div>{/* <Ticz className="w-32 h-32" /> */}</div>
      <div className="  hidden md:block">
        <ul className="flex text-[#b3b3b3]">
          <li className="mx-3">
            <a href="">Events</a>
          </li>
          <li className="mx-3">
            <a href="">My Tickets</a>
          </li>
          <li className="mx-3">
            <a href="">About Project</a>
          </li>
        </ul>
      </div>
      <button className="flex items-center bg-white px-5 py-3 rounded-xl text-[#0A0C11]">
        MY TICKETS <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default Navbar;
