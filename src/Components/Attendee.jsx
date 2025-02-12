import ProgressBar from "@ramonak/react-progress-bar"; 
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
const Attendee = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-[20px] border border-liner p-3 w-full max-w-[604px] mx-auto">
      {/* attendee's details */}
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

      <div className="border border-liner p-4 sm:p-6 mx-2 sm:mx-4 mt-4 rounded-[20px] bg-[#08252B] w-full">
        <div className="bg-[#052228] flex flex-col justify-center items-center py-4 px-5 sm:py-5 sm:px-7 rounded-[20px]">
          <h2 className="flex self-start">Upload Profile Photo</h2>
          <div className="relative flex justify-center items-center bg-[#08171a] w-full h-42 mt-7">
            <div className="border-4 border-[#24A0B5] flex flex-col justify-center items-center h-52 rounded-4xl">
              <CloudArrowDownIcon className='w-6 h-6' />
              <h2 className="text-center">Drag & drop or click to upload</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendee;
