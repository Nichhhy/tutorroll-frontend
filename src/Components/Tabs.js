import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";

import TeacherStep1 from "./FormSteps/TeacherStep1";
import TeacherStep2 from "./FormSteps/TeacherStep2";
import TeacherStep3 from "./FormSteps/TeacherStep3";
import TeacherStepReview from "./FormSteps/TeacherStepReview";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "http://localhost:8080";

export default function Tabs() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const userPersonal = useSelector((state) => state.userPersonal);
  const userPref = useSelector((state) => state.userPref);
  const userQualification = useSelector((state) => state.userQualification);

  const steps = [
    "Personal Details",
    "Tutoring Perfernce",
    "Qualifications",
    "Preview,",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <TeacherStep1 />;
      case 2:
        return <TeacherStep2 />;
      case 3:
        return <TeacherStep3 />;
      case 4:
        return <TeacherStepReview />;
      default:
    }
  };
  const nextStep = () => {
    let newStep = currentStep;
    newStep++;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  const prevStep = () => {
    let newStep = currentStep;
    newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const updateDatabase = () => {
    switch (currentStep) {
      case 1:
        try {
          axios
            .put(
              `${BACKEND_URL}/tutorStep1/update/${userPersonal.email}`,
              userPersonal
            )
            .then(() => {
              axios
                .get(`${BACKEND_URL}/tutorStep2/get/${userPersonal.email}`)
                .then((response) => {
                  console.log(response);
                  if (response.data.data.length === 0) {
                    axios.post(`${BACKEND_URL}/tutorStep2`, {
                      email: userPersonal.email,
                      location: [],
                      tutStyle: [],
                      subjectTaught: [
                        { level: "Primary", subjects: [], minimum: "" },
                      ],
                    });
                  }
                });
            });
        } catch (err) {
          console.log(err);
        }
        return nextStep();
      case 2:
        try {
          axios
            .put(
              `${BACKEND_URL}/tutorStep2/update/${userPersonal.email}`,
              userPref
            )
            .then(() => {
              axios
                .get(`${BACKEND_URL}/tutorStep3/get/${userPersonal.email}`)
                .then((response) => {
                  console.log(response);
                  if (response.data.data.length === 0) {
                    axios.post(`${BACKEND_URL}/tutorStep3`, {
                      email: userPersonal.email,
                      highestEd: "",
                      tutorCat: "",
                      YOE: "",
                      bio: "",
                      secSch: {
                        institution: "",
                        startDate: "",
                        endDate: "",
                        grade: "",
                      },
                      jc: {
                        institution: "",
                        startDate: "",
                        endDate: "",
                        grade: "",
                      },
                      dipuni: [
                        {
                          edLevel: "",
                          institution: "",
                          course: "",
                          startDate: "",
                          endDate: "",
                          grade: "",
                        },
                      ],
                    });
                  }
                });
            });
        } catch (err) {
          console.log(err);
        }
        return nextStep();
      case 3:
        try {
          axios
            .put(
              `${BACKEND_URL}/tutorStep3/update/${userPersonal.email}`,
              userQualification
            )
            .then((response) => {
              console.log(response);
            });
        } catch (err) {
          console.log(err);
        }
        return nextStep();
      default:
    }
  };

  const handleClick = (direction) => {
    /*     direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep); */

    switch (direction) {
      case "next":
        updateDatabase();

        return nextStep();
      case "back":
        return prevStep();
      case "submit":
        return navigate("/teacherProfile");

      default:
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#F2F4F7]">
      {/* Stepper */}
      <div className=" w-full max-w-[1440px] flex flex-col justify-center items-center  ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-[70px] p-10 w-full max-w-[560px] px-[32px] py-[24px] bg-white rounded-[10px]">
          {displayStep(currentStep)}
        </div>
      </div>

      {/* navigation button */}
      {/* {currentStep !== steps.length && ( */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
      {/*      )} */}
    </div>
  );
}
