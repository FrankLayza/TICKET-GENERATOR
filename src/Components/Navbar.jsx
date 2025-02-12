const Navbar = () => {
  return (
    <div className="border border-[#197686] flex justify-between items-center rounded-3xl font-jeju mx-18 my-6 px-5 py-2">
      <div>
        <h2>ticz</h2>
      </div>
      <div className="flex">
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
      <button className="bg-white px-5 py-3 rounded-xl text-[#0A0C11]">MY TICKETS</button>
    </div>
  );
};

export default Navbar;
