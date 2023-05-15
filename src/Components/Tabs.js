import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "../Contexts/StepperContext";

import TeacherStep1 from "./FormSteps/TeacherStep1";
import TeacherStep2 from "./FormSteps/TeacherStep2";
import TeacherStep3 from "./FormSteps/TeacherStep3";
import TeacherStepReview from "./FormSteps/TeacherStepReview";

export default function Tabs() {
  const [currentStep, setCurrentStep] = useState(1);

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

  const handleClick = (direction) => {
    let newStep = currentStep;

    /*     direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep); */

    switch (direction) {
      case "next":
        newStep++;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
        return console.log("next");
      case "back":
        newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
        return console.log("back");
      case "submit":
        return console.log("submit");

      default:
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#F2F4F7]">
      {/* Stepper */}
      <div className=" w-full max-w-[1440px] flex flex-col justify-center items-center  ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-[70px] p-10 w-full max-w-[560px] px-[32px] py-[24px] bg-white rounded-[10px]">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
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
