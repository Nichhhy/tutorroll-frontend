import TutorCard from "../TutorCard";
import icon from "../../Images/Icon/Bluetick.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TeacherStepReview() {
  const userPref = useSelector((state) => state.userPref);
  const userPersonal = useSelector((state) => state.userPersonal);
  const userQualification = useSelector((state) => state.userQualification);

  const [teachingSubs, setTeachingSubs] = useState("");

  useEffect(() => {
    let newString = "";
    userPref.subjectTaught.forEach((item) => {
      item.subjects.forEach((sub) => {
        newString += `${sub}, `;
      });
    });
    setTeachingSubs(newString);
  }, []);

  return (
    <div className="flex flex-col gap-[16px]">
      <p className="font-medium text-[#1D2939] text-[24px] leading-8 text-left">
        Review your profile
      </p>
      <TutorCard
        data={teachingSubs}
        name={userPersonal.firstName + " " + userPersonal.lastName}
        bio={userQualification.bio}
        tutorCat={userQualification.tutorCat}
        YOE={userQualification.YOE}
      />
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
