import PreviewTutorType from "../Components/PreviewTutorType";
import TutorCard from "../Components/TutorCard";
import image1 from "../Images/HomePage/HomePageHero/image 55.png";
import image2 from "../Images/HomePage/HomePageHero/image 56.png";
import image3 from "../Images/HomePage/HomePageHero/image 57.png";
import image4 from "../Images/HomePage/HomePageHero/image 58.png";
import image5 from "../Images/HomePage/HomePageHero/image 59.png";
import ACS from "../Images/HomePage/Schools/ACS.png";
import HWA from "../Images/HomePage/Schools/HWA.png";
import NTU from "../Images/HomePage/Schools/NTU.png";
import NUS from "../Images/HomePage/Schools/NUS.png";
import RI from "../Images/HomePage/Schools/RI.png";
import VJC from "../Images/HomePage/Schools/VJC.png";
import { ptArr, ftArr, otherArr } from "../Data/PreviewTutorInfo.js";
import ReviewPreview from "../Components/ReviewPreview";
import clara from "../Images/HomePage/HomePageHero/Clara Lee.png";

export default function Home() {
  return (
    <div className="flex  items-center flex-col ">
      <div className=" flex justify-center items-center w-screen py-[50px] px-[20px]">
        {/* hero secition */}
        <div className="w-full max-w-[1215px] grid grid-cols-2 h-[80%]">
          {/* hero left secition */}
          <div className="gap-[24px]  h-full flex items-start flex-col justify-center ">
            <h1 className="text-[#1D2939] text-left text-[36px] font-bold leading-[44px]">
              Find a tutor that suits your <br /> needs for free
            </h1>

            <p className="text-[14px] leading-[20px] text-[#101F3D]">
              Select from over <strong>100+ </strong>tutors in our learning
              community{" "}
            </p>
            <a
              href="/"
              className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[22px]  py-[12px] rounded-lg text-white "
            >
              Start browsing
            </a>
          </div>
          {/* hero right secition */}
          <div className=" gap-[10px]  grid grid-cols-10 grid-rows-6">
            <img
              src={image1}
              alt="image1"
              className="col-start-4 col-span-2 row-span-2"
            />
            <img
              src={image5}
              alt="image5"
              className="row-start-3 col-start-2"
            />
            <img
              src={image3}
              alt="image3"
              className="col-start-4 col-span-4 row-start-3 row-span-4 "
            />
            <img
              src={image2}
              alt="image2"
              className="col-start-9 row-start-4 "
            />
            <img
              src={image4}
              alt="image4"
              className="col-start-8 col-span-2 row-start-5 row-span-2 place-self-end"
            />
            <div className="flex justify-center items-center row-start-4 col-start-2 text-[9px] place-self-end bg-[#F0F9FF] rounded-full w-[69px] h-[69px] px-[10px] py-[10px]">
              Full time Tutor
            </div>
            <div className="flex justify-center items-center row-start-1 row-span-2 text-[12px] col-start-8 col-span-2 place-self-end bg-[#F0F9FF] rounded-full w-[120px] h-[120px] px-[13px] py-[13px]">
              Ex / Current MOE Teachers
            </div>
            <div className="flex justify-center items-center row-start-6 text-[9px] col-start-3 col-span-2 place-self-end bg-[#F0F9FF] rounded-full w-[69px] h-[69px] px-[10px] py-[10px]">
              Part-Time Tutors
            </div>
          </div>
        </div>
      </div>
      {/* schools section */}
      <div className="flex flex-col bg-white w-full justify-center items-center">
        <p>Find tutor from reputable schools</p>
        <div>
          <div className="grid grid-cols-6 gap-[20px]  place-items-center w-full max-w-[1013px] py-[20px]">
            <div>
              <img src={NUS} alt="NUS" className="px-[10px]"></img>
            </div>
            <div>
              <img src={RI} alt="RI" className="px-[10px]"></img>
            </div>
            <div>
              <img src={HWA} alt="HWA" className="px-[10px]"></img>
            </div>
            <div>
              <img src={NTU} alt="NTU" className="pl-[30px]"></img>
            </div>
            <div>
              <img src={VJC} alt="VJC" className="px-[40px]"></img>
            </div>
            <div>
              <img src={ACS} alt="ACS" className="px-[40px]"></img>
            </div>
          </div>
        </div>
      </div>

      {/* schools section */}
      <div className="w-full py-[90px] bg-[#F9FAFB] gap-[45px] flex flex-col justify-center items-center">
        <p className="font-medium text-[#1D2939] text-[24px] leading-8">
          Discover our top tutors
        </p>
        <div className="w-[1124px] flex items-center justify-center gap-[16px]">
          <TutorCard />
          <TutorCard />
          <TutorCard />
        </div>
        <a
          href="/"
          className="hover:shadow-md hover:bg-[#1D2939] duration-300 box-border px-[22px] rounded-lg py-[8px] whitespace-nowrap font-Circular font-medium text-[14px] text-white bg-black "
        >
          Browse all tutors
        </a>
      </div>

      {/* Tutor preview */}
      <div className="w-full py-[100px] bg-[#F5FBFF] gap-[45px] flex flex-col justify-center items-center">
        <div className="max-w-[1215px] w-full flex justify-center flex-col">
          <p className="font-medium text-[#1D2939] text-[24px] leading-8">
            What type of tutor are you looking for?
          </p>
          <div className="flex  gap-[16px] pt-[40px] items-center justify-center">
            <PreviewTutorType arr={ptArr} title="Part-Time Tutor" />
            <PreviewTutorType arr={ftArr} title="Full-Time Tutor" />
            <PreviewTutorType arr={otherArr} title="Ex/Current MOE Teachers" />
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
      {/* last section */}
      <div className=" flex justify-center items-center w-screen pt-[100px]">
        {/* hero secition */}
        <div className="w-full max-w-[1215px] grid grid-cols-1 h-[80%]">
          {/* hero left secition */}
          <div className="gap-[24px]  h-full flex items-center flex-col justify-center ">
            <h1 className="text-[#1D2939] text-left text-[30px] font-bold leading-[38px]">
              Let’s make finding your next tutor a breeze
            </h1>

            <p className="text-[14px] leading-[20px] text-[#475467]">
              Explore from over 100+ tutors in our learning community to help
              you achieve your goals
            </p>
            <a
              href="/"
              className="hover:shadow-md hover:bg-[#026AA2] duration-300 bg-[#0086C9] px-[22px]  py-[12px] rounded-lg text-white "
            >
              Get started
            </a>
          </div>
          {/* hero right secition */}
          <div className=" gap-[10px]  grid grid-cols-10 grid-rows-5 ">
            <img
              src={image3}
              alt="image3"
              className="col-start-1 col-span-1 row-start-2 row-span-1 "
            />
            <img
              src={image2}
              alt="image2"
              className="col-start-2 row-start-4 "
            />
            <img
              src={image1}
              alt="image1"
              className="col-start-4 col-span-1 row-span-1 row-start-2"
            />
            <img
              src={image2}
              alt="image2"
              className="col-start-6 row-start-3 "
            />
            <img
              src={image4}
              alt="image4"
              className="col-start-8 col-span-1 row-start-4 row-span-1"
            />

            <img
              src={image3}
              alt="image3"
              className="col-start-8 col-span-1 row-start-2 row-span-1 "
            />
            <img
              src={image1}
              alt="image1"
              className="col-start-10 col-span-1 row-span-1 row-start-1"
            />
            <img
              src={image2}
              alt="image2"
              className="col-start-10 row-start-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
