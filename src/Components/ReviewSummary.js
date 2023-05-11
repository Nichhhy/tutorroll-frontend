import starIcon from "../Images/Icon/StarIcon.png";

export default function ReviewSummary() {
  return (
    <div className="flex gap-[10px]">
      <img
        src={starIcon}
        alt="startIcon"
        className="w-[14px] h-[14px] pt-[3px]"
      ></img>
      <p className="text-[#475467] text-[12px]">4.88</p>
      <p className="text-[#475467] text-[12px]">{"(32 reviews)"}</p>
    </div>
  );
}
