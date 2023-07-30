import LevelButton from "../Components/LevelButton";

export default function Search() {
  const subjectArr = ["JC", "Upper Sec", "Lower Sec"];

  return (
    <div className="py-[65px] max-w-[1124px]">
      <div className="flex flex-col gap-[24px]">
        <p className="text-[30px] font-bold">What tutor are you looking for?</p>
        <div className=" flex gap-[20px] justify-center items-center">
          {subjectArr.map((item, index) => {
            return <LevelButton key={index} label={item} />;
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}
