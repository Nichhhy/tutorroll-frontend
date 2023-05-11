export default function ReviewPreview(props) {
  return (
    <div className="bg-white p-[24px] gap-[16px] flex flex-col items-start justify-start rounded-lg max-w-[400px]">
      <p className="text-[14px] text-[#344054] text-left">{props.content}</p>
      <div className="flex gap-[8px]">
        <img src={props.picUrl} alt="profilePic" className="max-w-[37px]" />
        <div>
          <p className="text-[12px] text-[#344054] text-left">{props.name}</p>
          <p className="text-[12px] text-[#344054] text-left">{props.school}</p>
        </div>
      </div>
    </div>
  );
}
