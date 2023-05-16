export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="w-full  flex px-[60px]  justify-center bg-white sticky bottom-0">
      <div className="w-full max-w-[1440px] flex px-[60px] py-[18px] justify-between bg-white">
        <button
          onClick={() => handleClick("back")}
          className={`hover:shadow-md hover:bg-[#FFFFFF] hover:text-[#344054] duration-300 bg-[#FFFFFF] px-[24px] border border-[#D0D5DD] py-[8px] rounded-lg text-[#D0D5DD]   ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Back
        </button>

        {currentStep === steps.length ? (
          <button
            onClick={() => handleClick("submit")}
            className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[24px]  py-[8px] rounded-lg text-white "
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => handleClick("next")}
            className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[24px]  py-[8px] rounded-lg text-white "
          >
            Next
          </button>
        )}
        {/* <button
          onClick={() => handleClick("next")}
          className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[24px]  py-[8px] rounded-lg text-white "
        >
          {currentStep === steps.length ? "Submit" : "Next"}
        </button> */}
      </div>
    </div>
  );
}
