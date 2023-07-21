import tutor from "../Images/HomePage/HomePageHero/image 55.png";
import icon from "../Images/Icon/Icon.png";
import ReviewSummary from "./ReviewSummary";

export default function TutorCard(props) {
  return (
    <div className="flex justify-start flex-col items-start gap-[10px] bg-white p-[16px] rounded-lg max-w-[364px] border border-[#EBEBEB]">
      <img
        src={props.tutorImage}
        alt="tutorDp"
        className="w-[110px] h-[110px]"
      />
      <p className="text-[18px]">{props.name ? props.name : "Meaghan Chan"}</p>
      <div className="flex gap-[10px]">
        <div>
          <img src={icon} alt="icon" className="w-[13px] pt-[3px]"></img>
        </div>
        <div>
          <p className="text-[#475467] text-[12px] text-left">
            {props.data
              ? props.data
              : "H2 History, H2 Chemistry, IB Chemistry, H2 Geography, H1 Geography,General Paper, Project.."}
          </p>
        </div>
      </div>
      {/* 
      <ReviewSummary /> */}
      <p className="text-[#475467] text-[12px] text-left">
        {props.bio
          ? props.bio
          : "As an experienced Mathematics educator of more than 20 years, Mr Teng has coached hundreds ..."}
      </p>

      <div className="flex justify-center items-center bg-[#F9FAFB] rounded-lg w-full px-[16px] py-[12px]">
        <div className="flex flex-col items-start w-[50%]">
          <p className="text-[#475467] text-[12px] text-left">Category</p>
          <p className="text-[#344054] text-[14px] text-left">
            {props.tutorCat ? props.tutorCat : "Full-time Tutor"}
          </p>
        </div>
        <div className="flex flex-col items-start w-[50%]">
          <p className="text-[#475467] text-[12px] text-left">Experience</p>
          <p className="text-[#344054] text-[14px] text-left">
            {props.YOE ? props.YOE + " years" : "8 years"}
          </p>
        </div>
      </div>
    </div>
  );
}
