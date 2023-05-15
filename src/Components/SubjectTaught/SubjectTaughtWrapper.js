import { useEffect, useState } from "react";
import SubjectTaught from "./SubjectsTaught";
import plusButton from "../../Images/Icon/PlusButton.png";
import { useStepperContext } from "../../Contexts/StepperContext";

export default function SubjectTaughtWrapper() {
  const { userData, setUserData } = useStepperContext();

  const addButton = () => {
    setUserData({
      ...userData,
      subjectTaught: [
        ...userData.subjectTaught,
        { level: "", subjects: "", minimum: "" },
      ],
    });
  };

  return (
    <div>
      {userData.subjectTaught.map((item, i) => (
        <div
          className="bg-[#F9FAFB] p-[16px] flex flex-col gap-[16px] my-[8px] rounded-lg "
          key={i}
        >
          {console.log(i)}
          <SubjectTaught index={i} />
        </div>
      ))}

      <div className="flex justify-start">
        <button className="flex gap-[11px] items-center" onClick={addButton}>
          <img src={plusButton} alt="plus button"></img>
          <p className="font-normal text-[#98A2B3] text-[14px] text-left">
            Add New Level
          </p>
        </button>
      </div>
    </div>
  );
}
