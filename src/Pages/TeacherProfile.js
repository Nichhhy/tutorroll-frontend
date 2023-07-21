import profilePic from "../Images/HomePage/HomePageHero/image 55.png";
import icon from "../Images/Icon/Icon.png";
import blueLocationIcon from "../Images/Icon/BlueLocationIcon.png";
import axios from "axios";

import userDp from "../Images/user.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserAuth } from "../Contexts/AuthContext";

export default function TeacherProfile() {
  const { user } = UserAuth();
  const userPersonal = useSelector((state) => state.userPersonal);
  const userPref = useSelector((state) => state.userPref);
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
    <div className="w-full flex justify-center gap-[32px]">
      <div className="w-full max-w-[1060px] flex py-[70px] justify-between">
        {/**leftside */}
        <div className="w-[640px] flex flex-col gap-[24px]">
          <div className="w-full flex gap-[24px]">
            <img src={userDp} alt="profilePic" className="w-[176px]"></img>
            <div className="flex flex-col gap-[10px] justify-center items-start">
              <p className="font-bold text-[#101828] text-[30px] text-left">
                {userPersonal.firstName + " " + userPersonal.lastName}
              </p>
              <div className="flex gap-[10px]">
                <div>
                  <img
                    src={blueLocationIcon}
                    alt="icon"
                    className="w-[16px] pt-[3px]"
                  ></img>
                </div>
                <div>
                  <p className="text-[#475467] text-[12px] text-left w-[450px]">
                    {userPref.location.map((item, index) => {
                      if (index !== userPref.location.length - 1) {
                        return <span key={index}>{item + ", "}</span>;
                      }
                      return <span key={index}>{item}</span>;
                    })}
                  </p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div>
                  <img
                    src={icon}
                    alt="icon"
                    className="w-[10px] pt-[3px]"
                  ></img>
                </div>
                <div>
                  <p className="text-[#475467] text-[12px] text-left w-[450px]">
                    {teachingSubs}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#F9FAFB] rounded-lg w-[640px] px-[16px] py-[12px]">
            <div className="flex flex-col items-start w-[50%]">
              <p className="text-[#475467] text-[12px] text-left">Category</p>
              <p className="text-[#344054] text-[14px] text-left">
                {userQualification.tutorCat}
              </p>
            </div>
            <div className="flex flex-col items-start w-[50%]">
              <p className="text-[#475467] text-[12px] text-left">Experience</p>
              <p className="text-[#344054] text-[14px] text-left">
                {userQualification.YOE} years
              </p>
            </div>
          </div>

          {/**about */}
          <p className="text-[#1D2939] text-[18px] text-left">About</p>
          <p className="text-[#344054] text-[16px] text-left">
            {userQualification.bio}
          </p>

          <p className="text-[#1D2939] text-[18px] text-left">
            Subjects Taught
          </p>

          <div className="border-[#EAECF0] border rounded-xl px-[24px] py-[32px] flex flex-col gap-[24px]">
            {userPref.subjectTaught.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-[24px]">
                  <p className="text-[#344054] text-[14px] text-left">
                    {item.level} from ${item.minimum}/h
                  </p>
                  <div className="flex flex-wrap gap-[6px]">
                    {item.subjects.map((sub, i) => {
                      return (
                        <div
                          key={i}
                          className="bg-[#F0F9FF] rounded-full px-[10px] py-[2px] text-[#344054] text-[14px] flex justify-center items-center gap-[8px]"
                        >
                          {sub}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/*    <span className="border w-full border-[#EAECF0] flex"></span>

            <span className="border w-full border-[#EAECF0] flex"></span> */}
          </div>
          <p className="text-[#1D2939] text-[18px] text-left">Tuition Style</p>
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-wrap gap-[6px]">
              {userPref.tutStyle.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#F0F9FF] rounded-full px-[10px] py-[2px] text-[#344054] text-[14px] flex justify-center items-center gap-[8px]"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-[#1D2939] text-[18px] text-left">Education </p>
          <div className="flex flex-col gap-[24px]">
            {userQualification.dipuni.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-wrap gap-[24px] items-center "
                >
                  <div className="bg-[#F0F9FF] max-h-[26px] rounded-full px-[10px] py-[2px] text-[#344054] text-[14px] flex justify-center items-center gap-[8px]">
                    {item.startDate} - {item.endDate}
                  </div>
                  <div className="text-left">
                    <p className="text-[#1D2939] text-[18px] text-left">
                      {item.edLevel} of {item.course}
                    </p>
                    <p className="text-[#1D2939] text-[12px] text-left">
                      {item.institution}
                    </p>
                  </div>
                </div>
              );
            })}
            {userQualification.secSch && (
              <div className="flex flex-wrap gap-[24px] items-center ">
                <div className="bg-[#F0F9FF] max-h-[26px] rounded-full px-[10px] py-[2px] text-[#344054] text-[14px] flex justify-center items-center gap-[8px]">
                  {userQualification.secSch.startDate} -{" "}
                  {userQualification.secSch.endDate}
                </div>
                <div className="text-left">
                  <p className="text-[#1D2939] text-[18px] text-left">
                    {userQualification.secSch.institution}
                  </p>
                  <p className="text-[#1D2939] text-[12px] text-left">
                    {userQualification.secSch.grade} points
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/**right side */}
        <div className="w-[388px]">
          <div className="w-full p-[32px] bg-[#F9FAFB] flex flex-col justify-center items-center gap-[16px] drop-shadow-md rounded-lg">
            <img src={userDp} alt="profilePic" className="w-[82px]"></img>
            <p className="font-bold text-[#101828] text-[16px] text-left">
              Chat with {userPersonal.firstName + " " + userPersonal.lastName}
            </p>
            <a
              href="/"
              className="hover:shadow-md hover:bg-[#026AA2] w-full duration-300 bg-[#0086C9] px-[22px]  py-[12px] rounded-lg text-white "
            >
              Whatsapp Teacher
            </a>
            <a
              href="/login"
              className="hover:shadow-md duration-200 w-full box-border gap-[8px] rounded-lg border-[1px] border-[#667085] px-[22px] py-[8px] whitespace-nowrap  font-Circular font-bold text-[14px] text-[#475467]"
            >
              Upvote
            </a>
            <a
              href="/login"
              className="hover:shadow-md duration-200 w-full box-border gap-[8px] rounded-lg border-[1px] border-[#667085] px-[22px] py-[8px] whitespace-nowrap  font-Circular font-bold text-[14px] text-[#475467]"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
