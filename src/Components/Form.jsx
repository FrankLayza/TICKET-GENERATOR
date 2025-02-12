const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-[20px] border border-liner p-3">
      <div className="my-3 flex justify-between w-full px-4">
        <h2 className="font-roboto">Ticket selection</h2>
        <p>Step 1/3</p>
      </div>
      <div className="border border-liner p-4 text-center mx-4 rounded-[20px] bg-[#08252B]">
        <div className="bg-[#07373F] py-5 px-7 rounded-[20px]">
          <h2 className="text-[55px] font-rage">Techember Fest "25</h2>
          <p className="text-[12px]">
            Join us for an unforgettable experience at [Event Name]
          </p>
          <p className="text-[12px]">[Event Location] || March 15, 2025|7:00PM</p>
        </div>
        <hr className="bg-[#07373F] my-4" />
        <div>
          <p className="self-start flex">Select ticket type:</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
