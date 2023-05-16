import profilePic from "../Images/HomePage/HomePageHero/image 55.png";
import icon from "../Images/Icon/Icon.png";
import blueLocationIcon from "../Images/Icon/BlueLocationIcon.png";

export default function TeacherProfile() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex py-[70px]">
        {/**leftside */}
        <div className="w-[66%]">
          <div className="w-full flex gap-[24px]">
            <img src={profilePic} alt="profilePic" className="w-[176px]"></img>
            <div className="flex flex-col gap-[10px] justify-center items-start">
              <p className="font-bold text-[#101828] text-[30px] text-left">
                Meaghan Chan
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
                  <p className="text-[#475467] text-[12px] text-left">
                    West (Jurong West, Clementi, Buona Vista, Kent Ridge,
                    Commonwealth, Queenstown)
                  </p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div>
                  <img
                    src={icon}
                    alt="icon"
                    className="w-[16px] pt-[3px]"
                  ></img>
                </div>
                <div>
                  <p className="text-[#475467] text-[12px] text-left">
                    H2 History, H2 Chemistry, IB Chemistry, H2 Geography, H1
                    Geography, General Paper, Project..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**right side */}
        <div className="w-[34%]">
          <div className="w-full p-[32px] bg-[#F9FAFB] flex flex-col justify-center items-center gap-[16px] drop-shadow-md rounded-lg">
            <img src={profilePic} alt="profilePic" className="w-[82px]"></img>
            <p className="font-bold text-[#101828] text-[16px] text-left">
              Chat with Meaghan
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
