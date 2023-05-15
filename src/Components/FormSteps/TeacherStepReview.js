import TutorCard from "../TutorCard";

import icon from "../../Images/Icon/Bluetick.png";
export default function TeacherStepReview() {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="font-medium text-[#1D2939] text-[24px] leading-8 text-left">
        Review your profile
      </p>
      <TutorCard />
      <div className="flex gap-[10px]">
        <div>
          <img src={icon} alt="icon" className="w-[13px] pt-[3px]"></img>
        </div>
        <div>
          <p className="text-[#475467] text-[12px] text-left">
            Profile approval within 2 working days. You will be notified via
            email.
          </p>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <div>
          <img src={icon} alt="icon" className="w-[13px] pt-[3px]"></img>
        </div>
        <div>
          <p className="text-[#475467] text-[12px] text-left">
            You can edit your profile subseqeuntly
          </p>
        </div>
      </div>
    </div>
  );
}
