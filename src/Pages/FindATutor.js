import heorImg from "../Images/FinadATutorPage/heroImage.jpg";
import ReviewPreview from "../Components/ReviewPreview";
import clara from "../Images/HomePage/HomePageHero/Clara Lee.png";
import fatImage1 from "../Images/FinadATutorPage/FATImage1.jpg";
import fatImage2 from "../Images/FinadATutorPage/FATImage2.jpg";
import fatImage3 from "../Images/FinadATutorPage/FATImage3.jpg";

export default function FindATutor() {
  return (
    <div className="flex  items-center flex-col ">
      <div className=" flex justify-center items-center w-screen py-[50px] px-[20px]">
        {/* hero secition */}
        <div className="w-full max-w-[1168px] grid grid-cols-2 h-[80%]">
          {/* hero left secition */}
          <div className="gap-[24px]  h-full flex items-start flex-col justify-center ">
            <h1 className="text-[#1D2939] text-left text-[36px] font-bold leading-[44px]">
              Find new students with ease
            </h1>

            <p className="text-[14px] leading-[20px] text-[#101F3D]">
              TutorRoll connects you to students who need your servicess
            </p>
            <a
              href="/"
              className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[22px]  py-[12px] rounded-lg text-white "
            >
              Start browsing
            </a>
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
