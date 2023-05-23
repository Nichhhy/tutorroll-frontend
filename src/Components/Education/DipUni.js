import { useSelector, useDispatch } from "react-redux";
import {
  updateDipUni,
  deleteDipUni,
} from "../../Contexts/Slice/UserQualification";

import deleteIcon from "../../Images/Icon/deleteIcon.png";

export default function Education(props) {
  const userQualification = useSelector((state) => state.userQualification);
  const dispatch = useDispatch();

  const onChange = (e) => {
    switch (e.target.name) {
      case "edLevel":
        dispatch(
          updateDipUni({
            index: props.index,
            type: "edLevel",
            edLevel: e.target.value,
          })
        );
        break;
      case "institution":
        dispatch(
          updateDipUni({
            index: props.index,
            type: "institution",
            institution: e.target.value,
          })
        );
        break;
      case "course":
        dispatch(
          updateDipUni({
            index: props.index,
            type: "course",
            course: e.target.value,
          })
        );
        break;

      case "startDate":
        dispatch(
          updateDipUni({
            index: props.index,
            type: "startDate",
            startDate: e.target.value,
          })
        );
        break;
      case "endDate":
        dispatch(
          updateDipUni({
            index: props.index,
            type: "endDate",
            endDate: e.target.value,
          })
        );
        break;
      case "grade":
        dispatch(
          updateDipUni({
            index: props.index,
            type: "grade",
            grade: e.target.value,
          })
        );
        break;
      default:
        break;
    }
    /* setUserData({
      ...userData,
      dipuni: userData.dipuni.map((object, index) => {
        if (index === props.index) {
          return { ...object, [e.target.name]: e.target.value };
        } else return object;
      }),
    }); */
  };

  const deletedipuni = (index) => {
    dispatch(deleteDipUni(index));
    /* setUserData({
      ...userData,
      dipuni: userData.dipuni.filter(
        (object) => object !== userData.dipuni[index]
      ),
    }); */
  };

  return (
    <div className="flex flex-col gap-[16px]">
      {props.index !== 0 ? (
        <div
          className="flex justify-end"
          onClick={() => deletedipuni(props.index)}
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

      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Education Level
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          onChange={onChange}
          name="edLevel"
          value={userQualification.dipuni[props.index].edLevel}
        >
          <option value="Diploma">Diploma</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Institution
        </p>
        <input
          name="institution"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Enter Institution"
          onChange={onChange}
          value={userQualification.dipuni[props.index].institution}
        ></input>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Course
        </p>
        <input
          name="course"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Enter Course Name"
          onChange={onChange}
          value={userQualification.dipuni[props.index].course}
        ></input>
      </div>
      <div className="flex  justify-start gap-[6px] w-full">
        <div className="w-full flex flex-col justify-start">
          <p className="font-normal text-[#475467] text-[14px] text-left">
            Start date
          </p>
          <input
            name="startDate"
            className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
            placeholder="Enter Start date"
            onChange={onChange}
            value={userQualification.dipuni[props.index].startDate}
          ></input>
        </div>
        <div className="w-full flex flex-col justify-start">
          <p className="font-normal text-[#475467] text-[14px] text-left">
            End date (or expected)
          </p>
          <input
            name="endDate"
            className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
            placeholder="Enter End date"
            onChange={onChange}
            value={userQualification.dipuni[props.index].endDate}
          ></input>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Grade
        </p>
        <input
          name="grade"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Enter Grade"
          onChange={onChange}
          value={userQualification.dipuni[props.index].grade}
        ></input>
      </div>
    </div>
  );
}
