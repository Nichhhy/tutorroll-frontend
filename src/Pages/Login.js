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
        </div>
      </div>
      <div className="flex justify-center items-center bg-cover bg-no-repeat bg-center w-[50%] bg-[url(https://s3-alpha-sig.figma.com/img/381b/d032/b56406633380609c8441f0bfd627bac3?Expires=1684713600&Signature=eNoVh2iBWXsui-5~-tLxalXtozi~vJpP7XzOqjIOXJHjwZ9lOVYBWVWJFVGCPR8QL1C5eOr6heon3k462bJ~PLEE~24MtdwGKgcI-6UWeq9KMf5K3~fj6qG~EHf3jusKn2VJqo1IokFVknd4-q9D2s6TPPuDsgkFr~dMgxpc0VtMVy-YsfKPyp2n2ikMRGvbNDhch2tW5quA5S6IUnONgSFmf4v14SnPvAJO-CAeTF9YoIogWl~HmaixBJAxmDBcECdEqhsMoRyqjMHg4ZJMoR36bqHyCypSH0zLKtg8jWpT2-uFGrQUqYswj9PkoLTqqLE6p33SSx3Tr1y8aGUjQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]">
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
