import ProgressBar from "@ramonak/react-progress-bar";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContent } from "../Context/FormContent";
import axios from "axios";

const Attendee = () => {
  const navigate = useNavigate();
  const { setFormData } = useFormContent();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const fileInput = document.getElementById("fileInput").files[0];

    if (fileInput) {
      const formData = new FormData();
      formData.append("file", fileInput);
      formData.append("upload_preset", "HNG profile photos");

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/drbi9pu6v/image/upload`,
          formData
        );
        const imageURL = response.data.secure_url;
        console.log("Uploaded Image URL:", imageURL);
        setFormData({ ...data, profilePhoto: imageURL });
        navigate("/ticket");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.log("form data", data);
      setFormData(data);
      navigate("/ticket");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-[20px] border border-liner p-9 w-full max-w-[604px] mx-auto">
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
        <div className="bg-[#052228] flex flex-col justify-center items-center py-4 px-5 sm:py-5 sm:px-7 rounded-[20px]">
          <h2 className="flex self-start text-white">Upload Profile Photo</h2>
          <div className="relative flex justify-center items-center bg-[#08171a] w-full h-42 mt-7">
            <div
              className="border-4 border-[#24A0B5] bg-[#0E464F] flex flex-col justify-center items-center h-52 rounded-4xl cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <CloudArrowDownIcon className="w-6 h-6" />
              <h2 className="text-center text-[16px] w-52">
                Drag & drop or click to upload
              </h2>
              <input
                id="fileInput"
                type="file"
                {...register("profilePhoto", {
                  required: "Profile photo is required",
                })}
                className="hidden"
                onChange={(e) =>
                  console.log("selected file", e.target.files[0])
                }
              />
            </div>
          </div>
          {errors.profilePhoto && (
            <p className="text-red-500 text-sm mt-6">
              {errors.profilePhoto.message}
            </p>
          )}
        </div>
        <hr className="bg-[#07373F] border-none h-1 my-5" />

        <div className="flex flex-col my-3">
          <label className="text-sm sm:text-base mb-1">Enter your name</label>
          <input
            className="outline-0 bg-[#08252B] border border-liner  p-2 rounded-lg text-sm sm:text-base mb-1"
            type="text"
            aria-label="Enter your name"
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-4">{errors.name.message}</p>
          )}

          <label className="text-sm sm:text-base mb-1">
            Enter your email *
          </label>
          <input
            className="outline-0 bg-[#08252B] border border-liner p-2 rounded-lg text-sm sm:text-base mb-1"
            type="email"
            placeholder="hello@avioflagos.io"
            aria-label="Enter your email"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
          )}

          <label className="text-sm sm:text-base mb-2">Special request?</label>
          <textarea
            className="border border-[#07373f] p-2 rounded-lg text-sm sm:text-base mb-1"
            placeholder="Textarea"
            aria-label="Enter any additional information"
            {...register("request")}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="border border-[#24A0B5] text-[#24A0B5] hover:text-white font-jeju font-light w-full sm:w-[48%] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5]"
          >
            Back
          </button>
          <button
            type="submit"
            className="border border-[#24A0B5] text-[#24A0B5] hover:text-white font-jeju font-light w-full sm:w-[48%] py-2 rounded-md cursor-pointer hover:bg-[#24A0B5]"
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default Attendee;
