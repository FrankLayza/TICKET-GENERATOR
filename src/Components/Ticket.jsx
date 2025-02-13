import ProgressBar from "@ramonak/react-progress-bar";
import {useFormContent} from '../Context/FormContent'; 
const Ticket = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-[20px] border border-liner p-3 w-full max-w-[604px] mx-auto">
      <div className="my-3 flex justify-between items-center w-full px-4">
        <h2 className="font-jeju text-xl sm:text-2xl">Ready</h2>
        <p className="text-sm sm:text-base">Step 1/3</p>
      </div>

      <ProgressBar
        completed={99.3}
        customLabel=" "
        maxCompleted={100}
        width="550px"
        height="5px"
        bgColor="#24A0B5"
      />

      <div className="my-7">
        <h2 className="text-center text-3xl sm:text-4xl mb-2">
          Your Ticket is Booked!
        </h2>
        <span className="text-[16px]">
          Check your email for a copy or you can <a href="">download</a>
        </span>
      </div>

      <div className="max-w-[300px] h-[600px] relative rounded-[20px] path w-full mx-auto border border-liner"></div>
    </div>
  );
};

export default Ticket;
