import { useStepperContext } from "../../Contexts/StepperContext";
import Tooltip from "../Tooltip";
import icon from "../../Images/Icon/Bluetick.png";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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
              value={userData["username"] || ""}
              name="username"
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
              value={userData["username"] || ""}
              name="username"
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
              value={userData["username"] || ""}
              name="username"
              placeholder="First Name"
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
              value={userData["username"] || ""}
              name="username"
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
              <input
                type="radio"
                id="SPR"
                name="citizenship"
                onChange={handleChange}
                value="HTML"
                checked
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="SPR"
              >
                Singaporean/PR
              </label>
            </div>

            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <input
                type="radio"
                id="For"
                name="citizenship"
                onChange={handleChange}
                value="CSS"
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="For"
              >
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
              <input
                type="radio"
                id="male"
                name="gender"
                onChange={handleChange}
                value="HTML"
                checked
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="male"
              >
                Male
              </label>
            </div>

            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                onChange={handleChange}
                value="CSS"
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="female"
              >
                Female
              </label>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <input
                type="radio"
                id="pnts"
                name="gender"
                onChange={handleChange}
                value="HTML"
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="pnts"
              >
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
              <input
                type="radio"
                id="chi"
                name="race"
                onChange={handleChange}
                value="HTML"
                checked
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="chi"
              >
                Chinese
              </label>
            </div>

            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <input
                type="radio"
                id="ind"
                name="race"
                onChange={handleChange}
                value="CSS"
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="ind"
              >
                Indian
              </label>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <input
                type="radio"
                id="malay"
                name="race"
                onChange={handleChange}
                value="HTML"
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="malay"
              >
                Malay
              </label>
            </div>
            <div className="w-[200px] flex justify-start gap-[8px] items-center">
              <input
                type="radio"
                id="oth"
                name="race"
                onChange={handleChange}
                value="HTML"
              />
              <label
                className="font-normal  text-[#667085] outline-none text-[14px] "
                for="oth"
              >
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
