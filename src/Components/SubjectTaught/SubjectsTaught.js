import { useEffect, useState } from "react";
import { useStepperContext } from "../../Contexts/StepperContext";

export default function SubjectTaught(props) {
  const { userData, setUserData } = useStepperContext();

  const onChange = (e) => {
    setUserData({
      ...userData,
      subjectTaught: userData.subjectTaught.map((object, index) => {
        if (index === props.index) {
          return { ...object, [e.target.name]: e.target.value };
        } else return object;
      }),
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Level
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChange}
          name="level"
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Subject(s)
        </p>
        <select
          name="subjects"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChange}
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Minimum
        </p>
        <select
          name="minimum"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChange}
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
    </div>
  );
}
