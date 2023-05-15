import Education from "./Education";
import bluePlusButton from "../../Images/Icon/BluePlusButton.png";
import { useStepperContext } from "../../Contexts/StepperContext";

export default function EducationWrapper() {
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
          <Education index={i} />
        </div>
      ))}

      <div className="flex justify-start">
        <button className="flex gap-[11px] items-center" onClick={addButton}>
          <img src={bluePlusButton} alt="plus button"></img>
          <p className="font-normal text-[#0086C9] text-[14px] text-left">
            Add Additional Qualifications
          </p>
        </button>
      </div>
    </div>
  );
}
