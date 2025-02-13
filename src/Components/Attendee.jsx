import ProgressBar from "@ramonak/react-progress-bar";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Attendee = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/generate");
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-[20px] border border-liner p-3 w-full max-w-[604px] mx-auto">
      <div className="my-3 flex justify-between items-center w-full px-4">
        <h2 className="font-jeju text-xl sm:text-2xl">Attendee details</h2>
        <p className="text-sm sm:text-base">Step 2/3</p>
      </div>
      <ProgressBar
        completed={66.6}
        customLabel=" "
        maxCompleted={100}
        width="550px"
        height="5px"
        bgColor="#24A0B5"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-liner p-4 sm:p-6 mx-2 sm:mx-4 mt-4 rounded-[20px] bg-[#08252B] w-full"
      >
        {/* Profile Photo Upload */}
        <div className="bg-[#052228] flex flex-col justify-center items-center py-4 px-5 sm:py-5 sm:px-7 rounded-[20px]">
          <h2 className="flex self-start text-white">Upload Profile Photo</h2>
          <div className="relative flex justify-center items-center bg-[#08171a] w-full h-42 mt-7">
            <div className="border-4 border-[#24A0B5] bg-[#0E464F] flex flex-col justify-center items-center h-52 rounded-4xl cursor-pointer">
              <CloudArrowDownIcon className="w-6 h-6" />
              <h2 className="text-center text-[16px] w-52">
                Drag & drop or click to upload
              </h2>
              <input
                type="file"
                {...register("profilePhoto", {
                  required: "Profile photo is required",
                })}
                className="hidden"
              />
            </div>
          </div>
          {errors.profilePhoto && (
            <p className="text-red-500 text-sm mt-1">
              {errors.profilePhoto.message}
            </p>
          )}
        </div>
        <hr className="bg-[#07373F] border-none h-1 my-5" />

        {/* Attendee Details */}
        <div className="flex flex-col my-3">
          {/* Name Field */}
          <label className="text-sm sm:text-base mb-1">Enter your name</label>
          <input
            className="border border-[#07373f] p-2 rounded-lg text-sm sm:text-base mb-1"
            type="text"
            aria-label="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-4">{errors.name.message}</p>
          )}

          {/* Email Field */}
          <label className="text-sm sm:text-base mb-1">
            Enter your email *
          </label>
          <input
            className="border border-[#07373f] p-2 rounded-lg text-sm sm:text-base mb-1"
            type="email"
            placeholder="hello@avioflagos.io"
            aria-label="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
          )}

          {/* Special Request Field */}
          <label className="text-sm sm:text-base mb-2">Special request?</label>
          <textarea
            className="border border-[#07373f] p-2 rounded-lg text-sm sm:text-base mb-1"
            placeholder="Textarea"
            aria-label="Enter any additional information"
            {...register("request")}
          />
        </div>

        {/* Confirm Buttons */}
        <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="border border-[#24A0B5] font-jeju font-light w-full sm:w-[48%] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5]"
          >
            Back
          </button>
          <button
            type="submit"
            className="border border-[#24A0B5] font-jeju font-light w-full sm:w-[48%] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5]"
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default Attendee;
