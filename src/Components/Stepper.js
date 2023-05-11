import React, { useState, useEffect, useRef } from "react";

export default function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={`flex justify-center items-center py-[13px] w-full border-t-2 transition duration-500 ease-in-out ${
          step.highlighted ? "border-[#026AA2]" : "border-gray-300 "
        }  ${step.completed ? "border-[#026AA2]" : "border-gray-300 "}`}
      >
        <div
          className={
            index !== newStep.length - 1
              ? "flex items-center justify-center"
              : "flex items-center"
          }
        >
          <div
            className={`relative flex flex-col items-center  ${
              step.selected ? "text-[#026AA2] " : "text-[#667085] "
            }`}
          >
            {/**tick */}
            <div
              className={`rounded-full transition duration-500 ease-in-out h-[24px] w-[24px] flex items-center justify-center mr-[8px] ${
                step.selected
                  ? step.completed
                    ? "bg-[#12B76A] text-white font-bold border border-[#12B76A] "
                    : "bg-[#F0F9FF]  border border-[#F0F9FF] "
                  : "bg-[#F9FAFB]  border border-[#F9FAFB]"
              }`}
            >
              {step.completed ? (
                <span className="text-white font-bold text-[8px] pt-[2px]">
                  &#10003;
                </span>
              ) : (
                index + 1
              )}
            </div>
          </div>
          {/**label */}

          <div
            className={`text-center  text-[16px]  ${
              step.highlighted ? "text-[#026AA2]" : "text-[#667085]"
            }`}
          >
            {step.description}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className=" flex justify-between items-center w-full">
      {stepsDisplay}
    </div>
  );
}
