import { useSelector, useDispatch } from "react-redux";
import { updateSecSch } from "../../Contexts/Slice/UserQualification";

export default function SecondarySchool(props) {
  const userQualification = useSelector((state) => state.userQualification);
  const dispatch = useDispatch();

  const onChange = (e) => {
    switch (e.target.name) {
      case "institution":
        dispatch(
          updateSecSch({ type: "institution", institution: e.target.value })
        );
        break;
      case "startDate":
        dispatch(
          updateSecSch({ type: "startDate", startDate: e.target.value })
        );
        break;
      case "endDate":
        dispatch(updateSecSch({ type: "endDate", endDate: e.target.value }));
        break;
      case "grade":
        dispatch(updateSecSch({ type: "grade", grade: e.target.value }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col justify-start gap-[6px]">
        <p className="font-normal text-[#475467] text-[14px] text-left">
          Institution
        </p>
        <input
          name="institution"
          className="px-[12px] py-[8px] font-normal text-[#475467] text-[14px]  text-left rounded-lg border border-[#D0D5DD]"
          placeholder="Enter Institution"
          value={userQualification.secSch.institution}
          onChange={onChange}
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
            value={userQualification.secSch.startDate}
            onChange={onChange}
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
            value={userQualification.secSch.endDate}
            onChange={onChange}
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
          value={userQualification.secSch.grade}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
}
