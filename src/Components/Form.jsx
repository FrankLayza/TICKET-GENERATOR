import { useState } from "react";

const Form = () => {
  const [free, setFree] = useState(false);
  const [regular, setRegular] = useState(false);
  const [ticket, setTicket] = useState(1);
  const [vip, setVIP] = useState(false);

  const handleActive = () => {
    setFree((prev) => (prev = !prev));
  };
  return (
    <div className="flex flex-col justify-center items-center rounded-[20px] border border-liner p-3 w-[604px]  ">
      <div className="my-3 flex justify-between items-center w-full px-4">
        <h2 className="font-jeju text-[32px]">Ticket selection</h2>
        <p className="text-[14px]">Step 1/3</p>
      </div>
      <progress
        value={50}
        max={100}
        className="w-full bg-[#24A0B5] mx-auto h-1 -mt-2 mb-5"
      ></progress>
      <div className="border border-liner p-6  mx-4 mt-3 rounded-[20px] bg-[#08252B] w-[536px] ">
        <div className="bg-[#07373F] flex flex-col justify-center items-center py-5 px-7 rounded-[20px] ">
          <h2 className=" text-center text-[62px] leading-[62px] font-rage">
            Techember Fest "25
          </h2>
          <p className="w-[300px] text-[15px] text-center">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now
          </p>
          <p className="text-[15px]">
            [Event Location] || March 15, 2025 | 7:00PM
          </p>
        </div>
        <hr className="bg-[#07373F] border-none h-1 my-4" />

        {/* ticket selection */}
        <div className="w-full overflow-hidden mb-3">
          <p className="self-start flex mb-2 text-[13px] capitalize">Select ticket type:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#052228] border border-[#07373f] w-full p-3 rounded-[24px]">
            <div
              className="border-2 border-[#197686] rounded-[12px] px-3 py-2 mx-2 hover:bg-[#197686] cursor-pointer "
              style={{ backgroundColor: free ? "#197686" : "transparent" }}
              onClick={() => handleActive()}
            >
              <h2 className="font-semibold text-[24px]">Free</h2>
              <h4 className="uppercase text-[13px]">Regular Access</h4>
              <p>20/52</p>
            </div>
            <div
              className="border-2 border-[#197686] rounded-[12px] px-3 py-2 mx-2 hover:bg-[#197686] cursor-pointer"
              style={{ backgroundColor: regular ? "#197686" : "transparent" }}
              onClick={() => setRegular((prev) => (prev = !prev))}
            >
              <h2 className="font-semibold text-[24px]">Free</h2>
              <h4 className="uppercase text-[13px]">Regular Access</h4>
              <p>20/52</p>
            </div>
            <div
              className="border-2 border-[#197686] rounded-[12px] px-3 py-2 mx-2 hover:bg-[#197686] cursor-pointer"
              style={{ backgroundColor: vip ? "#197686" : "transparent" }}
              onClick={() => setVIP((prev) => (prev = !prev))}
            >
              <h2 className="font-semibold text-[24px]">Free</h2>
              <h4 className="uppercase text-[13px]">Regular Access</h4>
              <p>20/52</p>
            </div>
          </div>
        </div>

        {/* number of tickets */}
        <div className="flex flex-col my-3">
          <label className="text-[13px] mb-1" htmlFor="">Number of tickets</label>
          <select
            name=""
            id=""
            className="border border-[#07373f] p-2 rounded-lg"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => (
              <option key={index} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* confirm buttons */}
        <div className="flex justify-between w-full">
          <button className="border border-[#24A0B5] w-[230px] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5] active:bg-[#24A0B5]">Cancel</button>
          <button className="border border-[#24A0B5] w-[230px] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5] active:bg-[#24A0B5]">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
