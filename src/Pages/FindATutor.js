import heorImg from "../Images/FinadATutorPage/heroImage.jpg";
import ReviewPreview from "../Components/ReviewPreview";
import clara from "../Images/HomePage/HomePageHero/Clara Lee.png";
import fatImage1 from "../Images/FinadATutorPage/FATImage1.jpg";
import fatImage2 from "../Images/FinadATutorPage/FATImage2.jpg";
import fatImage3 from "../Images/FinadATutorPage/FATImage3.jpg";
import { UserAuth } from "../Contexts/AuthContext";
import googleIcon from "../Images/Icon/googleIcon.png";
import fbIcon from "../Images/Icon/facebookIcon.png";
import { useSelector, useDispatch } from "react-redux";
import {
  updateEmail,
  updatePassword,
  updateUserType,
} from "../Contexts/Slice/UserLogIn";
import { updateEmail as updatePersonalEmail } from "../Contexts/Slice/UserPersonalDetailSlice";
import { updateEmail as updatePrefEmail } from "../Contexts/Slice/UserPref";
import { updateEmail as updateQualEmail } from "../Contexts/Slice/UserQualification";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = "http://localhost:8080";

export default function FindATutor() {
  const { createNewUser, googleSignIn, user } = UserAuth();
  const [validateInfo, setValidateInfo] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateUserType("Tutor"));
    dispatch(updateEmail(""));
    dispatch(updatePassword(""));
  }, []);

  const handleGoggleSignIn = async () => {
    try {
      await googleSignIn();
      console.log("clicked");
    } catch (err) {
      console.log(err);
    }
  };

  const createNewEmailPasswordUser = async (email, password) => {
    await createNewUser(email, password);
    navigate("/teacherSignUp");
    /* const newUser = createNewUser(userLogin.email, userLogin.password);
    console.log(user); */
    /* if (userExist === "created") {
      try {
        axios
          .post(`${BACKEND_URL}/user`, userLogin)
          .then((response) => {
            axios.post(`${BACKEND_URL}/tutorStep1/`, {
              email: userLogin.email,
              firstName: "",
              lastName: "",
              DOB: "",
              phone: "",
              citizenship: "",
              gender: "",
              race: "",
            });
          })
          .then(() => {
            dispatch(updatePersonalEmail(userLogin.email));
            dispatch(updatePrefEmail(userLogin.email));
            dispatch(updateQualEmail(userLogin.email));
          })
          .then(() => {
            navigate("/teacherSignUp");
          });

        console.log("clicked");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("user already exist");
    } */
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        dispatch(updateEmail(e.target.value));
        break;
      case "password":
        dispatch(updatePassword(e.target.value));
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex  items-center flex-col ">
      <div className=" flex justify-center items-center w-screen py-[50px] px-[20px]">
        {/* hero secition */}
        <div className="w-full max-w-[1168px] grid grid-cols-2 h-[80%]">
          {/* hero left secition */}
          <div className="gap-[24px]  h-full flex items-start flex-col justify-center ">
            {userLogin.loggedIn === false ? (
              <div className="gap-[24px]  h-full flex items-start flex-col justify-center ">
                <h1 className="text-[#1D2939] text-left text-[36px] font-bold leading-[44px]">
                  Find new students with ease
                </h1>

                <p className="text-[14px] leading-[20px] text-[#101F3D]">
                  TutorRoll connects you to students who need your servicess
                </p>
                <div className="w-[360px] flex flex-col justify-center items-center gap-[12px]">
                  <button
                    className="py-[12px]  border border-[#D0D5DD] w-full rounded-lg flex gap-[10px] justify-center items-center"
                    onClick={handleGoggleSignIn}
                  >
                    <img
                      src={googleIcon}
                      alt="googleIcon"
                      className="w-[24px]"
                    />
                    Continue with Google
                  </button>
                  <button className="py-[12px]  border border-[#D0D5DD] w-full rounded-lg flex gap-[10px] justify-center items-center">
                    <img src={fbIcon} alt="fbIcon" />
                    Continue with Facebook
                  </button>

                  <p className="text-[14px] leading-[20px] text-[#475467]">
                    OR
                  </p>
                  <div className="w-full">
                    <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
                      Email
                    </p>
                    <div
                      className={`flex rounded-lg border  bg-[#FCFCFD] px-[12px] py-[8px] w-full ${
                        validateInfo.includes("email")
                          ? "border-[#FDA29B]"
                          : "border-[#D0D5DD]"
                      } `}
                    >
                      <input
                        onChange={handleChange}
                        name="email"
                        placeholder="Your email"
                        className="w-full font-normal appearance-none  text-[#667085] outline-none text-[14px]"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
                      Password
                    </p>
                    <div className=" flex rounded-lg border border-[#D0D5DD] bg-[#FCFCFD] px-[12px] py-[8px] w-full">
                      <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="*******"
                        className="w-full font-normal appearance-none  text-[#667085] outline-none text-[14px]"
                      />
                    </div>
                  </div>
                  {/* <div className="w-full">
                    <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
                      Re-Enter Password
                    </p>
                    <div className=" flex rounded-lg border border-[#D0D5DD] bg-[#FCFCFD] px-[12px] py-[8px] w-full">
                      <input
                        type="password"
                        name="repassword"
                        placeholder="*******"
                        className="w-full font-normal appearance-none  text-[#667085] outline-none text-[14px]"
                      />
                    </div>
                  </div> */}
                  <button
                    onClick={() =>
                      createNewEmailPasswordUser(
                        userLogin.email,
                        userLogin.password
                      )
                    }
                    className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[22px]  py-[12px] rounded-lg text-white w-full"
                  >
                    Sign up with email
                  </button>
                </div>

                <p className="text-[14px] leading-[20px] text-[#475467]">
                  Already have an account?
                  <a href="/" className="text-[#0086C9]">
                    {" "}
                    Log In
                  </a>
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* hero right secition */}
          <div className="flex items-center justify-end">
            <img className="w-[430px]" src={heorImg} alt="heroImage" />
          </div>
        </div>
      </div>
      {/* reviews preview */}
      <div className="w-full py-[100px] bg-[#1D2939] gap-[45px] flex flex-col justify-center items-center">
        <div className="max-w-[1215px] w-full flex justify-center flex-col">
          <p className="font-medium text-white text-[24px] leading-8">
            See what our members are saying
          </p>
          <div className="flex  gap-[24px] pt-[40px] items-start justify-center">
            <ReviewPreview
              picUrl={clara}
              name="Clara Lee"
              school="Hwa Chong Institution, 2023"
              content="I was struggling with Chemistry, I knew I needed extra help but didn't know where to turn. That's when I stumbled upon TutorRoll and found Ms Chan. I was initially nervous about working with a tutor but the portal provided a safe and reliable way to connect with experienced tutors who truly cared about helping me succeed. "
            />
            <ReviewPreview
              picUrl={clara}
              name="Clara Lee"
              school="Hwa Chong Institution, 2023"
              content="Thanks to TutorRoll, I was able to find a tutor that not only fit my specific needs but also fit my budget. I would highly recommend this platform to any student who is struggling and needs extra help. It truly is a game-changer!"
            />
            <ReviewPreview
              picUrl={clara}
              name="Clara Lee"
              school="Hwa Chong Institution, 2023"
              content="The platform was incredibly easy to use and allowed me to input my specific needs and preferences for a tutor. Within a matter of hours, I got multiple responses from qualified tutors who were eager to help me. The best part was that I was able to review their profiles and choose the tutor who I felt would be the best fit for my child."
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-screen  px-[20px]">
        {/* hero secition */}
        <div className="w-full max-w-[1168px] grid  h-[80%]">
          {/* hero left secition */}
          <div className="gap-[24px]  h-full flex items-start flex-col justify-center py-[90px] ">
            <h1 className="text-[#1D2939] text-left text-[36px] font-bold leading-[44px]">
              Join us while we’re in BETA
            </h1>

            <p className="text-[14px] leading-[20px] text-[#101F3D]">
              As we gain users, your profile will gain more popularity. It’ll
              only take a minute!
            </p>
            <a
              href="/"
              className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[22px]  py-[12px] rounded-lg text-white "
            >
              Become a Tutor
            </a>
          </div>
          <div className="flex  justify-between w-full gap-[72px]">
            <div className="gap-[24px] flex flex-col items-start">
              <img src={fatImage1} alt="image1" />
              <p className="text-[18px] font-semibold">
                Be part of a community
              </p>
              <p className="text-[16px] text-left text-[#344054] font-normal">
                Join a community of educators teaching the next generation.
              </p>
            </div>
            <div className="gap-[24px] flex flex-col items-start">
              <img src={fatImage2} alt="image1" />
              <p className="text-[18px] font-semibold">
                Be Empowered to set your own schedule
              </p>
              <p className="text-[16px] text-left text-[#344054] font-normal">
                Choose when and how much you want to teach, fit students to your
                schedule easily.
              </p>
            </div>
            <div className="gap-[24px] flex flex-col items-start">
              <img src={fatImage3} alt="image1" />
              <p className="text-[18px] font-semibold">
                Opportunities to Impact
              </p>
              <p className="text-[16px] text-left text-[#344054] font-normal">
                Eager young minds await you. It’s time to scale your impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
