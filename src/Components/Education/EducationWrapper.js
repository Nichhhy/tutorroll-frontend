import DipUni from "./DipUni";
import SecondarySchool from "./SecondarySch";
import Jc from "./Jc";
import bluePlusButton from "../../Images/Icon/BluePlusButton.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDipUni } from "../../Contexts/Slice/UserQualification";

export default function EducationWrapper(props) {
  const [eductationState, setEducationState] = useState("sec");
  const userQualification = useSelector((state) => state.userQualification);
  const dispatch = useDispatch();

  const addButton = () => {
    dispatch(addDipUni());
  };

  const onChange = (type) => {
    setEducationState(type);
  };

  const displayEd = (eductationState) => {
    switch (eductationState) {
      case "sec":
        return (
          <div className="bg-[#F9FAFB] p-[16px] flex flex-col gap-[16px] my-[8px] rounded-lg ">
            <SecondarySchool />
          </div>
        );
      case "jc":
        return (
          <div className="bg-[#F9FAFB] p-[16px] flex flex-col gap-[16px] my-[8px] rounded-lg ">
            <Jc />
          </div>
        );
      case "dipuni":
        return userQualification.dipuni.map((item, i) => (
          <div
            className="bg-[#F9FAFB] p-[16px] flex flex-col gap-[16px] my-[8px] rounded-lg "
            key={i}
          >
            <DipUni index={i} />
          </div>
        ));

      default:
    }
  };

  return (
    <div>
      <div className="flex w-full">
        <div
          className={`w-full border-b-2 transition duration-500 ease-in-out text-[14px] py-[11px] flex justify-center cursor-pointer items-center ${
            eductationState === "sec"
              ? "border-[#0086C9] text-[#0086C9]"
              : "border-[#EAECF0] text-[#475467] "
          }  `}
          onClick={() => onChange("sec")}
        >
          Secondary School
        </div>
        <div
          className={`w-full border-b-2 transition duration-500 ease-in-out text-[14px] py-[11px] flex cursor-pointer justify-center items-center ${
            eductationState === "jc"
              ? "border-[#0086C9] text-[#0086C9]"
              : "border-[#EAECF0] text-[#475467] "
          }  `}
          onClick={() => onChange("jc")}
        >
          JC
        </div>
        <div
          className={`w-full border-b-2 transition duration-500 ease-in-out text-[14px] py-[11px] cursor-pointer flex justify-center items-center ${
            eductationState === "dipuni"
              ? "border-[#0086C9] text-[#0086C9]"
              : "border-[#EAECF0] text-[#475467] "
          }  `}
          onClick={() => onChange("dipuni")}
        >
          Diploma/University
        </div>
      </div>
      {displayEd(eductationState)}

      {eductationState === "dipuni" ? (
        <div className="flex justify-start">
          <button className="flex gap-[11px] items-center" onClick={addButton}>
            <img src={bluePlusButton} alt="plus button"></img>
            <p className="font-normal text-[#0086C9] text-[14px] text-left">
              Add Additional Qualifications
            </p>
          </button>
        </div>
      ) : null}
    </div>
  );
}
