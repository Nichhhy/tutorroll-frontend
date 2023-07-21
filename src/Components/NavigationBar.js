import logo from "../TutorRollLogo.png";
import betaLogo from "../BetaLogo.png";
import { UserAuth } from "../Contexts/AuthContext";

export default function NavigationBar() {
  const { createNewUser, googleSignIn, user, logout } = UserAuth();
  return (
    <nav className="sticky z-[100] top-0 w-full flex flex-row justify-center border-b border-[#EAECF0] bg-white">
      <div className=" w-full max-w-[1440px]  px-[48px] py-[16px] flex flex-row justify-between">
        <div className=" flex h-[44px] justify-between items-center">
          <div className="flex flex-row items-center p-0 gap-[8px]">
            <a href="/">
              <img src={logo} alt="Logo" className="shrink-0"></img>
            </a>
            <img src={betaLogo} alt="betaLogo"></img>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-[24px] p-0 w-min-[408px] ">
            <a
              href="/findatutor"
              className=" whitespace-nowrap  font-Circular font-bold text-[14px] text-[#475467]"
            >
              Find a Tutor
            </a>
            <a
              href="/joinastutor"
              className=" whitespace-nowrap font-Circular font-bold text-[14px] text-[#475467]"
            >
              Join as a Tutor
            </a>
            <a
              href="/login"
              className="hover:shadow-md duration-200 box-border gap-[8px] rounded-lg border-[1px] border-[#667085] px-[22px] py-[8px] whitespace-nowrap  font-Circular font-bold text-[14px] text-[#475467]"
            >
              Log In
            </a>
            <a
              href="/"
              className="hover:shadow-md hover:bg-[#1D2939] duration-300 box-border px-[22px] rounded-lg py-[8px] whitespace-nowrap font-Circular font-bold text-[14px] text-white bg-black "
            >
              Sign Up
            </a>

            {/* <a
              href="/"
              onClick={() => logout()}
              className="hover:shadow-md hover:bg-[#1D2939] duration-300 box-border px-[22px] rounded-lg py-[8px] whitespace-nowrap font-Circular font-bold text-[14px] text-white bg-black "
            >
              logout
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
