import { useFormContent } from "../Context/FormContent";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
const Form = () => {
  const navigate = useNavigate();
  const { ticketData, setTicketData } = useFormContent();
  return (
    <div className="flex flex-col justify-center items-center rounded-[20px] border border-liner p-9 w-full max-w-[604px] mx-auto">
      <div className="my-3 flex justify-between items-center w-full px-4">
        <h2 className="font-jeju text-xl sm:text-2xl">Ticket selection</h2>
        <p className="text-sm sm:text-base">Step 1/3</p>
      </div>

      <ProgressBar
        completed={33.3}
        customLabel=" "
        maxCompleted={100}
        width="550px"
        height="5px"
        bgColor="#24A0B5"
      />

      <div className="border border-liner p-4 sm:p-6 mx-2 sm:mx-4 mt-3 rounded-[20px] bg-[#08252B] w-full">
        <div className="bg-[#07373F] flex flex-col justify-center items-center py-4 px-5 sm:py-5 sm:px-7 rounded-[20px]">
          <h2 className="text-center text-3xl sm:text-4xl leading-tight font-rage">
            Techember Fest &rdquo;25
          </h2>
          <p className="w-full max-w-[300px] text-sm sm:text-base text-center">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p className="text-sm sm:text-base">
            [Event Location] || March 15, 2025 | 7:00PM
          </p>
        </div>

        <hr className="bg-[#07373F] border-none h-1 my-4" />

        <div className="w-full mb-3">
          <p className="self-start flex mb-2 text-sm sm:text-base capitalize">
            Select ticket type:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-[#052228] border border-[#07373f] w-full p-3 rounded-[24px]">
            <div
              onClick={() =>
                setTicketData({ ...ticketData, ticketType: "Regular" })
              }
              className="border-2 border-[#197686] rounded-[12px] px-3 py-2 hover:bg-[#197686] cursor-pointer text-center"
            >
              <h2 className="font-semibold text-lg sm:text-xl">Free</h2>
              <h4 className="uppercase text-sm sm:text-base">Regular Access</h4>
              <p>20/52</p>
            </div>

            <div
              onClick={() =>
                setTicketData({ ...ticketData, ticketType: "VIP" })
              }
              className="border-2 border-[#197686] rounded-[12px] px-3 py-2 hover:bg-[#197686] cursor-pointer text-center"
            >
              <h2 className="font-semibold text-lg sm:text-xl">$150</h2>
              <h4 className="uppercase text-sm sm:text-base">VIP Access</h4>
              <p>20/52</p>
            </div>

            <div
              onClick={() =>
                setTicketData({ ...ticketData, ticketType: "VVIP" })
              }
              className="border-2 border-[#197686] rounded-[12px] px-3 py-2 hover:bg-[#197686] cursor-pointer text-center"
            >
              <h2 className="font-semibold text-lg sm:text-xl">$150</h2>
              <h4 className="uppercase text-sm sm:text-base">VVIP Access</h4>
              <p>20/52</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-3">
          <label className="text-sm sm:text-base mb-1">Number of tickets</label>
          <select
            onChange={(e) =>
              setTicketData({
                ...ticketData,
                ticketCount: Number(e.target.value),
              })
            }
            className="border border-[#07373f] p-2 rounded-lg text-sm sm:text-base"
            required
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => (
              <option key={index} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
          <button className="border border-[#24A0B5] font-jeju font-light w-full sm:w-[48%] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5] active:bg-[#24A0B5]">
            Cancel
          </button>
          <button
            onClick={() => navigate("/generate")}
            className="border border-[#24A0B5] font-jeju font-light w-full sm:w-[48%] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5] active:bg-[#24A0B5]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
