import Tooltip from "../Tooltip";
import icon from "../../Images/Icon/Bluetick.png";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateDOB,
  updatePhone,
  updateCitizenship,
  updateGender,
  updateRace,
  updateEmail,
} from "../../Contexts/Slice/UserPersonalDetailSlice";
import axios from "axios";

const BACKEND_URL =
  "https://fkbvyflxwl.execute-api.ap-southeast-1.amazonaws.com";

export default function TecherStep1() {
  const userPersonal = useSelector((state) => state.userPersonal);
  const userLogin = useSelector((state) => state.userLogin);
  const [step1, setStep1] = useState({
    citizenship: "",
    dob: "",
    email: "",
    firstName: "",
    gender: "",
    lastName: "",
    phone: "",
    race: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    /*  try {
      axios
        .get(`${BACKEND_URL}/tutorStep1/get/${userLogin.email}`)
        .then((response) => {
          console.log(response);
          if (response.data.data.length !== 0) {
            console.log(response);
            dispatch(updateEmail(response.data.data[0].email));
            dispatch(updateFirstName(response.data.data[0].firstName));
            dispatch(updateLastName(response.data.data[0].lastName));
            dispatch(updateDOB(response.data.data[0].DOB));
            dispatch(updatePhone(response.data.data[0].phone));
            dispatch(updateCitizenship(response.data.data[0].citizenship));
            dispatch(updateGender(response.data.data[0].gender));
            dispatch(updateRace(response.data.data[0].race));
          } else {
            console.log(response);
          }
        })
        .then(() => {
          setStep1(userPersonal);
        });
    } catch (err) {
      console.log(err);
    } */
    try {
      axios
        .post(
          `${BACKEND_URL}/getPersonalInfo`,
          {
            email: "Nicholas@Nicholas.com",
          },
          {
            headers: {
              "Content-Type": "text/plain",
            },
          }
        )
        .then((response) => {
          setStep1(response.data);
          console.log(response);
        })
        .then(() => {
          console.log(step1);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    console.log(step1);
  }, [step1]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStep1({ ...step1, [name]: value.trim() });
  };

  const tooltip1 = (
    <div className="w-full flex flex-col">
      <p className="font-normal text-[#475467] text-[12px] p-[1px] text-left">
        Tutors who look friendly and professional get the most students
      </p>
      <div className="flex gap-[10px]">
        <div>
          <img src={icon} alt="icon" className="w-[13px] pt-[3px]"></img>
        </div>
        <div>
          <p className="text-[#475467] text-[12px] text-left">
            Avoid using selfies or apply special effects to your photo
          </p>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <div>
          <img src={icon} alt="icon" className="w-[13px] pt-[3px]"></img>
        </div>
        <div>
          <p className="text-[#475467] text-[12px] text-left">
            Be the only person in the photo
          </p>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <div>
          <img src={icon} alt="icon" className="w-[13px] pt-[3px]"></img>
        </div>
        <div>
          <p className="text-[#475467] text-[12px] text-left">
            Ensure your face and eyes are fully visible (except for religious
            reason)
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="font-medium text-[#1D2939] text-[24px] leading-8 text-left">
        Personal Details
      </p>

      <div className="flex gap-[16px] ">
        <div className="w-full">
          <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
            First Name
          </p>
          <div className=" flex rounded-lg border border-[#D0D5DD] bg-[#FCFCFD] px-[12px] py-[8px] w-full">
            <input
              onChange={handleChange}
              value={step1.firstName ? step1.firstName : ""}
              name="firstName"
              placeholder="First Name"
              className="w-full font-normal appearance-none  text-[#667085] outline-none text-[14px]"
            />
          </div>
        </div>
        <div className="w-full">
          <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
            Last Name
          </p>
          <div className=" flex rounded-lg border border-[#D0D5DD] bg-[#FCFCFD] px-[12px] py-[8px] w-full">
            <input
              onChange={handleChange}
              value={step1.lastName ? step1.lastName : ""}
              name="lastName"
              placeholder="last Name"
              className="w-full font-normal appearance-none  text-[#667085] outline-none text-[14px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[16px] ">
        <div className="w-full">
          <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
            Date of Birth
          </p>
          <div className=" flex rounded-lg border border-[#D0D5DD] bg-[#FCFCFD] px-[12px] py-[8px] w-full">
            <input
              onChange={handleChange}
              value={step1.dob ? step1.dob : ""}
              name="DOB"
              placeholder="DD/MM/YYYY"
              className="w-full font-normal appearance-none  text-[#667085] outline-none text-[14px]"
            />
          </div>
        </div>
        <div className="w-full">
          <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
            Phone Number
          </p>
          <div className=" flex rounded-lg border border-[#D0D5DD] bg-[#FCFCFD] px-[12px] py-[8px] w-full">
            <input
              onChange={handleChange}
              value={step1.phone ? step1.phone : ""}
              name="phone"
              placeholder="+65 1234 5678"
              className="w-full font-normal appearance-none  text-[#667085] outline-none text-[14px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[16px] ">
        <div className="w-full flex flex-col gap-[12px]">
          <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
            Citizenship
          </p>
          <div className="flex gap-[16px]">
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="citizenship"
                  onChange={handleChange}
                  value="Singaporean/PR"
                  checked={step1.citizenship === "Singaporean/PR"}
                />
                Singaporean/PR
              </label>
            </div>

            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="citizenship"
                  onChange={handleChange}
                  value="Foreigner"
                  checked={step1.citizenship === "Foreigner"}
                />{" "}
                Foreigner
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[16px] ">
        <div className="w-full flex flex-col gap-[12px]">
          <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
            Gender
          </p>
          <div className="flex gap-[16px]">
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChange}
                  value="Male"
                  checked={step1.gender === "Male"}
                />{" "}
                Male
              </label>
            </div>

            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChange}
                  value="Female"
                  checked={step1.gender === "Female"}
                />{" "}
                Female
              </label>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChange}
                  value="Prefernottosay"
                  checked={step1.gender === "Prefernottosay"}
                />{" "}
                Prefer not to say
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[16px] ">
        <div className="w-full flex flex-col gap-[12px]">
          <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
            Race
          </p>
          <div className="flex gap-[16px]">
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="race"
                  onChange={handleChange}
                  value="Chinese"
                  checked={step1.race === "Chinese"}
                />{" "}
                Chinese
              </label>
            </div>

            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="race"
                  onChange={handleChange}
                  value="Indian"
                  checked={step1.race === "Indian"}
                />{" "}
                Indian
              </label>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="race"
                  onChange={handleChange}
                  value="Malay"
                  checked={step1.race === "Malay"}
                />{" "}
                Malay
              </label>
            </div>
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <label className="font-normal  text-[#667085] outline-none text-[14px] ">
                <input
                  type="radio"
                  name="race"
                  onChange={handleChange}
                  value="Others"
                  checked={step1.race === "Others"}
                />{" "}
                Others
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[16px] ">
        <div className="w-full flex flex-col gap-[12px]">
          <div className="flex justify-between">
            <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
              Profile Photo
            </p>
            <Tooltip information={tooltip1} />
          </div>
        </div>
      </div>
    </div>
  );
}
