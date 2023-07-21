import EducationWrapper from "../Education/EducationWrapper";
import {
  updateHighestEd,
  updateTutorCat,
  updateYOE,
  updateBio,
  updateWholeSecSch,
  updateWholeJc,
  updateWholeDipuni,
} from "../../Contexts/Slice/UserQualification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
const BACKEND_URL = "http://localhost:8080";

export default function TeacherStep3() {
  const userQualification = useSelector((state) => state.userQualification);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios
        .get(`${BACKEND_URL}/tutorStep3/get/${userQualification.email}`)
        .then((response) => {
          console.log(response);
          if (response.data.data.length !== 0) {
            console.log(response);
            dispatch(updateHighestEd(response.data.data[0].highestEd));
            dispatch(updateTutorCat(response.data.data[0].tutorCat));
            dispatch(updateYOE(response.data.data[0].YOE));
            dispatch(updateBio(response.data.data[0].bio));
            dispatch(updateWholeSecSch(response.data.data[0].secSch));
            dispatch(updateWholeJc(response.data.data[0].jc));
            dispatch(updateWholeDipuni(response.data.data[0].dipuni));
          } else {
            console.log(response);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "highestEd":
        dispatch(updateHighestEd(e.target.value));
        break;
      case "tutorCat":
        dispatch(updateTutorCat(e.target.value));
        break;
      case "YOE":
        dispatch(updateYOE(e.target.value));
        break;
      case "bio":
        dispatch(updateBio(e.target.value));
        break;

      default:
        break;
    }
    /* setUserData({ ...userData, [name]: value }); */
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <p className="font-medium text-[#1D2939] text-[24px] leading-8 text-left">
        Qualifications
      </p>
      <p className="font-normal text-[#475467] text-[14px] leading-8 text-left">
        Tell students more about your background
      </p>

      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Highest Education Level
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          name="highestEd"
          onChange={handleChange}
          value={userQualification.highestEd}
        >
          <option value="N/O Level">N/O Level</option>
          <option value="Polytechnic/Diploma Student">
            Polytechnic/Diploma Student
          </option>
          <option value="Polytechnic/Diploma Graduate">
            Polytechnic/Diploma Graduate
          </option>
          <option value="A-level Student">A-level Student</option>
          <option value="A-level Graduate">A-level Graduate</option>
          <option value="Undergraduate ">Undergraduate</option>
          <option value="Graduate">Graduate</option>
          <option value="Master's Degree Holder">Master's Degree Holder</option>
          <option value="PhD Holder">PhD Holder</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Tutor Category
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          name="tutorCat"
          onChange={handleChange}
          value={userQualification.tutorCat}
        >
          <option value="Part-time Tutor">Part-time Tutor</option>
          <option value="Full-time Tutor">Full-time Tutor</option>
          <option value="Ex-MOE Teacher">Ex-MOE Teacher</option>
          <option value="MOE Teacher ">MOE Teacher </option>
          <option value="Ex-School Teacher">Ex-School Teacher</option>
          <option value="NIE Trainee ">NIE Trainee</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          How many years of teaching experience do you have?
        </p>
        <select
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Select Level"
          name="YOE"
          onChange={handleChange}
          value={userQualification.YOE}
        >
          <option value="0-1">0-1</option>
          <option value="1-3">1-3</option>
          <option value="3-5">3-5</option>
          <option value="5-7">5-7</option>
          <option value="8+">8+</option>
        </select>
      </div>
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">Bio</p>
        <p className="font-normal text-[#475467] text-[12px] text-left">
          Please be descriptive and include:
          <br />- Years of tutoring experience, number of students taught &
          their improvements
          <br />- Relevant subject grades
          <br />- Other teaching experiences or academic achievements (tuition
          centre, relief teaching, Dean's list, scholarship etc.)
        </p>
        <input
          className="px-[12px] py-[8px] font-normal h-[160px] text-[#475467] text-[14px] text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Enter text here"
          name="bio"
          onChange={handleChange}
          value={userQualification.bio}
        ></input>

        <EducationWrapper />
      </div>
    </div>
  );
}
