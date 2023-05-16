import { createContext, useContext, useEffect, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    phone: "",
    citizenship: "",
    gender: "",
    race: "",
    location: [],
    subjectTaught: [{ level: "", subjects: "", minimum: "" }],
    secSch: { institution: "", startDate: "", endDate: "", grade: "" },
    jc: { institution: "", startDate: "", endDate: "", grade: "" },
    dipuni: [
      {
        edLvl: "",
        institution: "",
        course: "",
        startDate: "",
        endDate: "",
        grade: "",
      },
    ],
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
