import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "../Contexts/StepperContext";

import Account from "./FormSteps/Account";
import Details from "./FormSteps/Details";

export default function Tabs() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Login",
    "Personal Details",
    "Tutoring Perfernce",
    "Qualifications",
    "Preview,",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      /* case 3:
        return <Payment />;
      case 4:
        return <Final />; */
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#F2F4F7]">
      {/* Stepper */}
      <div className=" w-full max-w-[1440px] flex flex-col justify-center items-center ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 w-full max-w-[560px] px-[32px] py-[24px] bg-white rounded-[10px]">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}
