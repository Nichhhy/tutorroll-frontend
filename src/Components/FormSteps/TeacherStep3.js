import EducationWrapper from "../Education/EducationWrapper";

export default function TeacherStep3() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="font-medium text-[#1D2939] text-[24px] leading-8 text-left">
        Qualifications
      </p>
      <p className="font-normal text-[#475467] text-[14px] leading-8 text-left">
        Tell students more about your background
      </p>

      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Highest Education Level
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          name="level"
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Tutor Category
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          name="level"
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          How many years of teaching experience do you have?
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          name="level"
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          How many years of teaching experience do you have?
        </p>
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Please be descriptive and include:- Years of tutoring experience,
          number of students taught & their improvements- Relevant subject
          grades- Other teaching experiences or academic achievements (tuition
          centre, relief teaching, Dean's list, scholarship etc.)
        </p>
        <input
          className="px-[12px] py-[8px] font-normal h-[160px] text-[#475467] text-[14px] text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Enter text here"
          name="HMY"
        ></input>

        <EducationWrapper />
      </div>
    </div>
  );
}
