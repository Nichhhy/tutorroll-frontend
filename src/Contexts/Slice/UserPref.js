import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: [],
  tutStyle: [],
  subjectTaught: [{ level: "Primary", subjects: [], minimum: "" }],
};

export const userPrefSlice = createSlice({
  name: "userPref",
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updateTutStyle: (state, action) => {
      state.tutStyle = action.payload;
    },
    updateSubjectTaught: (state, action) => {
      state.subjectTaught = action.payload;
    },
    updateLevelSelected: (state, action) => {
      state.subjectTaught[action.payload.index] = {
        ...state.subjectTaught[action.payload.index],
        level: action.payload.level,
        subjects: [],
      };
    },
    updateMinimum: (state, action) => {
      state.subjectTaught[action.payload.index] = {
        ...state.subjectTaught[action.payload.index],
        minimum: action.payload.minimum,
      };
    },
    addOneSubject: (state, action) => {
      state.subjectTaught[action.payload.index].subjects = [
        ...state.subjectTaught[action.payload.index].subjects,
        action.payload.subject,
      ];
    },
    deleteOneSubject: (state, action) => {
      state.subjectTaught[action.payload.index].subjects = [
        ...state.subjectTaught[action.payload.index].subjects.slice(
          0,
          action.payload.subIndex
        ),
        ...state.subjectTaught[action.payload.index].subjects.slice(
          action.payload.subIndex + 1
        ),
      ];
    },

    addtoSubjectsTaught: (state) => {
      state.subjectTaught = [
        ...state.subjectTaught,
        { level: "Primary", subjects: [], minimum: "" },
      ];
    },
    deleteSubject: (state, action) => ({
      ...state,
      subjectTaught: [
        ...state.subjectTaught.slice(0, action.payload),
        ...state.subjectTaught.slice(action.payload + 1),
      ],
    }),
  },
});

export const {
  updateLocation,
  updateTutStyle,
  updateSubjectTaught,
  updateLevelSelected,
  updateMinimum,
  addtoSubjectsTaught,
  deleteSubject,
  addOneSubject,
  deleteOneSubject,
} = userPrefSlice.actions;

export default userPrefSlice.reducer;
