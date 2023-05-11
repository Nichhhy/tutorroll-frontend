import tick from "../Images/Icon/check-circle.png";

export default function PreviewTutorType(props) {
  return (
    <div className="flex flex-col bg-white p-[32px] gap-[16px] items-start justify-center max-w-[394px]">
      <p className="text-[18px] text-[#1D2939]">{props.title}</p>
      {props.arr.map((item, index) => (
        <div className="flex gap-[14px] " key={index}>
          <img src={tick} alt="tick" className="shrink-0 w-[20px] h-[20px]" />
          <div>
            <p className="text-[#475467] text-[16px] text-left">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
