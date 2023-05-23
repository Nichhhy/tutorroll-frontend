import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import crossButton from "../../Images/Icon/crossButton.png";
import {
  updateLevelSelected,
  updateMinimum,
  addOneSubject,
  deleteOneSubject,
} from "../../Contexts/Slice/UserPref";
const BACKEND_URL = "http://localhost:8080";
export default function SubjectTaught(props) {
  const userPref = useSelector((state) => state.userPref);

  const [levels, setLevels] = useState({});
  const [subjects, setSubjects] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/subject/level`).then((response) => {
      setLevels(response.data);
    });

    axios.get(`${BACKEND_URL}/subject/level/Primary`).then((response) => {
      setSubjects(response.data);
    });
  }, []);

  const onChangeLevel = (e) => {
    let newSub = e.target.value.replace(/ /g, "%20");

    axios
      .get(`${BACKEND_URL}/subject/level/${newSub}`)
      .then((response) => {
        setSubjects(response.data);
      })
      .then(
        dispatch(
          updateLevelSelected({
            index: props.index,
            level: e.target.value,
          })
        )
      );
  };

  const onChange = (e) => {
    dispatch(updateMinimum({ index: props.index, minimum: e.target.value }));
  };

  const onChangeSubject = (e) => {
    if (
      !userPref.subjectTaught[props.index].subjects.includes(e.target.value)
    ) {
      dispatch(addOneSubject({ index: props.index, subject: e.target.value }));
    }
  };

  const onClickCross = (index) => {
    dispatch(deleteOneSubject({ index: props.index, subIndex: index }));
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Level
        </p>

        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChangeLevel}
          value={userPref.subjectTaught[props.index].level}
          name="level"
        >
          {levels.data &&
            levels.data.map((item, index) => (
              <option key={index} value={item.levelName}>
                {item.levelName}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Subject(s)
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {userPref.subjectTaught[props.index].subjects &&
            userPref.subjectTaught[props.index].subjects.map((sub, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#F0F9FF] rounded-full px-[10px] py-[2px] text-[#344054] text-[14px] flex justify-center items-center gap-[8px]"
                >
                  {sub}
                  <img
                    src={crossButton}
                    alt="crossButton"
                    className="w-[8px] h-[8px] cursor-pointer"
                    onClick={() => onClickCross(index)}
                  />
                </div>
              );
            })}
        </div>

        <select
          name="subjects"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChangeSubject}
        >
          {subjects.data &&
            subjects.data.map((item, index) => (
              <option key={index} value={item.subjectName}>
                {item.subjectName}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Minimum Rate
        </p>
        <input
          type="text"
          name="minimum"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Enter Minimum "
          onChange={onChange}
          value={userPref.subjectTaught[props.index].minimum}
        ></input>
      </div>
    </div>
  );
}
