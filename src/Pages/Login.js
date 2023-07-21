import { UserAuth } from "../Contexts/AuthContext";
import ReviewPreview from "../Components/ReviewPreview";
import clara from "../Images/HomePage/HomePageHero/Clara Lee.png";
import googleIcon from "../Images/Icon/googleIcon.png";
import fbIcon from "../Images/Icon/facebookIcon.png";

export default function Login() {
  const { googleSignIn } = UserAuth();

  const handleGoggleSignIn = async () => {
    try {
      await googleSignIn();
      console.log("clicked");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-[80vh]">
      <div className="w-[50%] flex justify-center items-center">
        <div className="w-[360px] flex flex-col justify-center items-center gap-[12px]">
          <p className="font-medium text-[#1D2939] text-[24px] leading-8">
            Log In
          </p>
          <p className="text-[14px] leading-[20px] text-[#475467]">
            Don’t have an account?
            <a href="/" className="text-[#0086C9]">
              {" "}
              Sign up
            </a>
          </p>

          <button
            className="py-[12px]  border border-[#D0D5DD] w-full rounded-lg flex gap-[10px] justify-center items-center"
            onClick={handleGoggleSignIn}
          >
            <img src={googleIcon} alt="googleIcon" className="w-[24px]" />
            Continue with Google
          </button>
          <button className="py-[12px]  border border-[#D0D5DD] w-full rounded-lg flex gap-[10px] justify-center items-center">
            <img src={fbIcon} alt="fbIcon" />
            Continue with Facebook
          </button>

          <p className="text-[14px] leading-[20px] text-[#475467]">OR</p>
          <div className="w-full">
            <p className="font-normal text-[#475467] text-[14px] p-[1px] text-left">
              Email
            </p>
            <div
              className={`flex rounded-lg border  bg-[#FCFCFD] px-[12px] py-[8px] w-full `}
            >
              <input
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
                type="password"
                name="password"
                placeholder="*******"
                className="w-full font-normal appearance-none  text-[#667085] outline-none text-[14px]"
              />
            </div>
          </div>
          <button className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[22px]  py-[12px] rounded-lg text-white w-full">
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center bg-cover bg-no-repeat bg-center w-[50%] bg-[url(https://s3-alpha-sig.figma.com/img/381b/d032/b56406633380609c8441f0bfd627bac3?Expires=1686528000&Signature=DCD6mx5j2VcCKax-FvTx3C2tkE4jqbmWoQOj9I5e2Hn5EBI~OXD7-beCVtUXHJqacQeIab0aU-H03hre2ZcLCVx1NN0FGP9Fn6CqUyEPHbRw8iVVI2Pq1pNJ3dJtbD32wq4Hyo6gtlZosMfBeqWLMv-vh5kCcgFyN0DkujGNjBJ206AZuHFhJer04NDFeTQUgUqvMXZIuYvbxvCmnfoSqCpVLz9~-oUSab7YA187ciQvOfaOoBa88xyh95YHJPZ9uDQYsNy4fksCmR~vGOX-qKYpVQdswcQhDZBveJ86bHck4kHv1hJIfIuFF1GxlOckUGxfkQlBICK7SCPUGFS1Tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]">
        <ReviewPreview
          picUrl={clara}
          name="Clara Lee"
          school="Hwa Chong Institution, 2023"
          content="The platform was incredibly easy to use and allowed me to input my specific needs and preferences for a tutor. Within a matter of hours, I got multiple responses from qualified tutors who were eager to help me. The best part was that I was able to review their profiles and choose the tutor who I felt would be the best fit for my child."
        />
      </div>
    </div>
  );
}
