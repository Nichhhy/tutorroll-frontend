import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  DOB: "",
  phone: "",
  citizenship: "",
  gender: "",
  race: "",
};

export const userPersonalSlice = createSlice({
  name: "userPersonal",
  initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
    updateDOB: (state, action) => {
      state.DOB = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
    updateCitizenship: (state, action) => {
      state.citizenship = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
    updateRace: (state, action) => {
      state.race = action.payload;
    },
  },
});

export const {
  updateProfileInfo,
  updateFirstName,
  updateLastName,
  updateDOB,
  updatePhone,
  updateCitizenship,
  updateGender,
  updateRace,
} = userPersonalSlice.actions;

export default userPersonalSlice.reducer;
