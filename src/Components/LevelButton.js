import { useState } from "react";

export default function LevelButton(props) {
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    setSelected(!selected);
  };

  return (
    <button
      className={`w-[154px] h-[44px] rounded-[10px]  ${
        selected ? "bg-[#026AA2] text-white" : "bg-[#F2F4F7] text-[#475467]"
      }`}
      onClick={() => handleChange()}
    >
      {props.label}
    </button>
  );
}
