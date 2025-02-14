import ProgressBar from "@ramonak/react-progress-bar";
import { useFormContent } from "../Context/FormContent";
import { useNavigate } from "react-router-dom";
import Bar from "../assets/bar.png";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
const Ticket = () => {
  const { formData } = useFormContent();
  const { ticketData } = useFormContent();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center rounded-[20px] border border-liner p-9 w-full max-w-[604px] mx-auto">
      <div className="my-3 flex justify-between items-center w-full px-4">
        <h2 className="font-jeju text-xl sm:text-2xl">Ready</h2>
        <p className="text-sm sm:text-base">Step 1/3</p>
      </div>

      <ProgressBar
        completed={75.3}
        customLabel=" "
        maxCompleted={100}
        width="550px"
        height="5px"
        bgColor="#24A0B5"
      />

      <div className="my-7">
        <h2 className="text-center font-alat text-3xl sm:text-4xl mb-2">
          Your Ticket is Booked!
        </h2>
        <span className="text-[16px] font-roboto">
          Check your email for a copy or you can <a href="">download</a>
        </span>
      </div>

      <div className="flex flex-col justify-center items-center p-6  w-full ">
        <div className="max-w-[300px] h-[600px] bg-linear-to-b from-[#2c5f6a] via-[#102a30] to-[#1b3f47] rounded-[20px] path w-full mx-auto border border-liner p-4 md:p-0 ">
          <div className="max-w-[260px] w-full h-[446px] border border-[#24A0B5] mx-auto mt-5 rounded-[16px] p-2 ">
            <div className="  flex flex-col justify-center items-center py-4 px-5 sm:py-5 sm:px-7 rounded-[20px]">
              <h2 className="text-center text-3xl sm:text-4xl leading-tight font-rage">
                Techember Fest &rdquo;25
              </h2>
              <p className="flex items-center gap-2 text-center text-xs">
                <FaMapMarkerAlt className="text-red-700" /> 04 Rumens road,
                Ikoyi, Lagos
              </p>
              <p className="flex items-center gap-2 text-center text-xs">
                <FaCalendarAlt className="text-red-700" /> March 15, 2025 ||
                7:00PM
              </p>
            </div>

            <div className="w-32 h-32 overflow-hidden mb-4 mx-auto border-5 border-[#7efcfc] rounded-2xl">
              {formData.profilePhoto ? (
                <img src={formData.profilePhoto} />
              ) : (
                "no image is being displayed"
              )}
            </div>
            <div className="grid grid-cols-2 border border-[#133D44] bg-[#08343C] rounded-md">
              <div className="border border-[#12464E] border-l-0 border-t-0 px-2 py-2">
                <p className="text-[10px] font-roboto text-[#12464E]">
                  Enter your name
                </p>
                <p className="text-xs break-words">{formData.name}</p>
              </div>
              <div className=" border border-[#12464E] border-r-0 border-t-0 px-2 py-2">
                <p className="text-[10px] font-roboto text-[#12464E] ">
                  Enter your email *
                </p>
                <p className="text-xs break-words">{formData.email}</p>
              </div>
              <div className="border border-[#12464E] border-l-0 border-t-0 px-2 py-2">
                <p className="text-[10px] font-roboto text-[#12464E]">
                  Ticket type:
                </p>
                <p className="text-xs">{ticketData.ticketType}</p>
              </div>
              <div className="border border-[#12464E] border-t-0 border-r-0 px-2 py-2 ">
                <p className="text-[10px] font-roboto text-[#12464E]">
                  Ticket for:
                </p>
                <p className="text-xs break-words">{ticketData.ticketCount}</p>
              </div>
              <div className="col-end-2 px-2 py-2">
                <p className="text-[10px] font-roboto text-[#12464E]">
                  Special request?
                </p>
                <p className="text-xs overflow-hidden  ">{formData.request}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 h-28 border-t-2 border-dashed border-[#00eaff]">
            <img src={Bar} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
        <button
          onClick={() => navigate("/")}
          className="border border-[#24A0B5] font-jeju text-[#24A0B5] hover:text-white font-light w-full sm:w-[48%] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5] active:bg-[#24A0B5]"
        >
          Book Another Ticket
        </button>
        <button
          onClick={() => navigate("/")}
          className="border border-[#24A0B5] font-jeju font-light text-[#24A0B5] hover:text-white w-full sm:w-[48%] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5] active:bg-[#24A0B5]"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Ticket;
