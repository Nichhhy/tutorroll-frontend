import SubjectTaught from "./SubjectsTaught";
import plusButton from "../../Images/Icon/PlusButton.png";
import { useSelector, useDispatch } from "react-redux";
import {
  addtoSubjectsTaught,
  deleteSubject,
} from "../../Contexts/Slice/UserPref";

import deleteIcon from "../../Images/Icon/deleteIcon.png";

export default function SubjectTaughtWrapper() {
  const userPref = useSelector((state) => state.userPref);

  const dispatch = useDispatch();

  const addButton = () => {
    dispatch(addtoSubjectsTaught());
  };

  const deleteSubjectTaught = (index) => {
    dispatch(deleteSubject(index));
  };

  return (
    <div>
      {userPref.subjectTaught.map((item, i) => (
        <div
          className="bg-[#F9FAFB] p-[16px] flex flex-col gap-[16px] my-[8px] rounded-lg "
          key={i}
        >
          {i !== 0 ? (
            <div
              className="flex justify-end"
              onClick={() => deleteSubjectTaught(i)}
            >
              <img
                src={deleteIcon}
                alt="deleteIcon"
                className="cursor-pointer w-[12px]"
              ></img>
            </div>
          ) : (
            ""
          )}

          <SubjectTaught index={i} />
        </div>
      ))}

      <div className="flex justify-start">
        <button className="flex gap-[11px] items-center" onClick={addButton}>
          <img src={plusButton} alt="plus button"></img>
          <p className="font-normal text-[#98A2B3] text-[14px] text-left">
            Add New Level
          </p>
        </button>
      </div>
    </div>
  );
}
