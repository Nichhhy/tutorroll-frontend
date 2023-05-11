import logo from "../TutorRollLogo.png";
import betaLogo from "../BetaLogo.png";
import instagram from "../Images/Icon/Instagram.png";
import facebook from "../Images/Icon/Facebook.png";

export default function Footer() {
  return (
    <div className="pt-[50px] pb-[92px] bg-[#F9FAFB] w-full flex justify-center  bottom-0">
      <div className="max-w-[1200px] w-full ">
        <div className="w-full flex justify-between">
          <div className="flex flex-row items-center p-0 gap-[8px] ">
            <a href="/">
              <img src={logo} alt="Logo" className="shrink-0"></img>
            </a>
            <img src={betaLogo} alt="betaLogo"></img>
          </div>
          <div className="flex flex-row items-center p-0 gap-[26px]">
            <a href="/">
              <img
                src={instagram}
                alt="Logo"
                className="shrink-0 w-[20px]"
              ></img>
            </a>
            <a href="/">
              <img
                src={facebook}
                alt="Logo"
                className="shrink-0 w-[20px]"
              ></img>
            </a>
          </div>
        </div>
        <div className="border-[1px] border-[#D0D5DD] w-full my-[24px]"></div>
        <div className="flex flex-row items-center p-0 gap-[37px] ">
          <a href="/">
            <p>Find Tutor</p>
          </a>
          <a href="/">
            <p>Join as a Tutor</p>
          </a>
          <a href="/">
            <p>Blog</p>
          </a>
          <a href="/">
            <p>FAQs</p>
          </a>
          <a href="/">
            <p>Contact Us</p>
          </a>
        </div>
      </div>
    </div>
  );
}
