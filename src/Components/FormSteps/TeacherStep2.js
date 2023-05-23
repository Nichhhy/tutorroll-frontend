import { useState, useEffect } from "react";
import SubjectTaughtWrapper from "../SubjectTaught/SubjectTaughtWrapper";

import { useSelector, useDispatch } from "react-redux";

import { updateLocation, updateTutStyle } from "../../Contexts/Slice/UserPref";

const BACKEND_URL = "http://localhost:8080";

export default function Details() {
  const userPref = useSelector((state) => state.userPref);
  /*   const [step2, setStep2] = useState(userPref); */
  const [checkedItems, setCheckedItems] = useState(userPref.location);
  const [checkedStyle, setcheckedStyle] = useState(userPref.tutStyle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLocation(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    dispatch(updateTutStyle(checkedStyle));
  }, [checkedStyle]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckedItems([...checkedItems, e.target.value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== e.target.value));
    }
  };

  const handleChangeTutStyle = (e) => {
    if (e.target.checked) {
      setcheckedStyle([...checkedStyle, e.target.value]);
    } else {
      setcheckedStyle(checkedStyle.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <p className="font-medium text-[#1D2939] text-[24px] leading-8 text-left">
        Tutoring Preference
      </p>
      <p className="font-normal text-[#475467] text-[14px] leading-8 text-left">
        Preferred Tutoring Location(s) (you can select more than one)
      </p>
      <div className="flex gap-[16px] ">
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="North"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChange}
              checked={userPref.location.includes("North")}
            />
            <div>
              North
              <p className="font-normal text-[#667085] text-[12px]  text-left">
                Woodlands, Sembawang, Admiralty, Yishun, Khatib
              </p>
            </div>
          </label>
        </div>
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="North West"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChange}
              checked={userPref.location.includes("North West")}
            />
            <div>
              North West
              <p className="font-normal text-[#667085] text-[12px]  text-left">
                Bukit Batok, Choa Chu Kang, Bukit Panjang, Yew Tee
              </p>
            </div>
          </label>
        </div>
      </div>

      <div className="flex gap-[16px] ">
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="West"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChange}
              checked={userPref.location.includes("West")}
            />
            <div>
              West
              <p className="font-normal text-[#667085] text-[12px]  text-left">
                Jurong West, Clementi, Buona Vista, Kent Ridge, Commonwealth,
                Queenstown
              </p>
            </div>
          </label>
        </div>
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="Central"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChange}
              checked={userPref.location.includes("Central")}
            />
            <div>
              Central
              <p className="font-normal text-[#667085] text-[12px]  text-left">
                Newton, Orchard, Outram, River Valley, Rocher, Downtown Core,
                Novena, Tanglin, Bukit Timah, Thomson
              </p>
            </div>
          </label>
        </div>
      </div>
      <div className="flex gap-[16px] ">
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="North East"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChange}
              checked={userPref.location.includes("North East")}
            />
            <div>
              North East
              <p className="font-normal text-[#667085] text-[12px]  text-left">
                Yio Chu Kang, Potong Pasir, Punggol, Hougang, Sengkang, Bishan,
                AMK, Toa Payoh
              </p>
            </div>
          </label>
        </div>
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="East"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChange}
              checked={userPref.location.includes("East")}
            />
            <div>
              East
              <p className="font-normal text-[#667085] text-[12px]  text-left">
                Aljunied, Paya Lebar, Eunos, Tampines, Marine Parade, Pasir Ris,
                Changi
              </p>
            </div>
          </label>
        </div>
      </div>
      <div className="flex gap-[16px] ">
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="South"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChange}
              checked={userPref.location.includes("South")}
            />
            <div>
              South
              <p className="font-normal text-[#667085] text-[12px]  text-left">
                Tanjong Pagar, Marina South, Harbourfront, Telok Blangah
              </p>
            </div>
          </label>
        </div>
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="any"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChange}
              checked={userPref.location.includes("any")}
            />
            <div>
              I’m ok with anywhere
              <p className="font-normal text-[#667085] text-[12px]  text-left">
                Flexible location
              </p>
            </div>
          </label>
        </div>
      </div>
      <p className="font-normal text-[#475467] text-[14px] leading-8 text-left">
        What style of tuition do you provide? (you can select more than one)
      </p>
      <div className="flex gap-[16px] ">
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="1-1 Tuition"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChangeTutStyle}
              checked={userPref.tutStyle.includes("1-1 Tuition")}
            />
            <div>1-1 Tuition</div>
          </label>
        </div>
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="Group Tuition"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChangeTutStyle}
              checked={userPref.tutStyle.includes("Group Tuition")}
            />
            <div>Group Tuition</div>
          </label>
        </div>
      </div>

      <div className="flex gap-[16px] ">
        <div className="w-full flex justify-start items-start">
          <label className="font-medium text-[#475467] text-[14px] text-left flex justify-start items-start">
            <input
              type="checkbox"
              value="Online Tuition"
              className="w-[16px] mr-[8px] mt-[3px]"
              onChange={handleChangeTutStyle}
              checked={userPref.tutStyle.includes("Online Tuition")}
            />
            <div>Online Tuition</div>
          </label>
        </div>
      </div>
      <div>
        <p className="font-medium text-[#1D2939] text-[14px] text-left">
          Subjects Taught
        </p>
        <SubjectTaughtWrapper />
      </div>
    </div>
  );
}
