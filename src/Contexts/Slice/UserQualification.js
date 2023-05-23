import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  highestEd: "",
  tutorCat: "",
  YOE: "",
  bio: "",
  secSch: { institution: "", startDate: "", endDate: "", grade: "" },
  jc: { institution: "", startDate: "", endDate: "", grade: "" },
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
};

export const userQulificationSlice = createSlice({
  name: "userQualification",
  initialState,
  reducers: {
    updateHighestEd: (state, action) => {
      state.highestEd = action.payload;
    },
    updateTutorCat: (state, action) => {
      state.tutorCat = action.payload;
    },
    updateYOE: (state, action) => {
      state.YOE = action.payload;
    },
    updateBio: (state, action) => {
      state.bio = action.payload;
    },
    updateSecSch: (state, action) => {
      switch (action.payload.type) {
        case "institution":
          state.secSch.institution = action.payload.institution;
          break;
        case "startDate":
          state.secSch.startDate = action.payload.startDate;
          break;
        case "endDate":
          state.secSch.endDate = action.payload.endDate;
          break;
        case "grade":
          state.secSch.grade = action.payload.grade;
          break;
        default:
          break;
      }
    },
    updateJc: (state, action) => {
      switch (action.payload.type) {
        case "institution":
          state.jc.institution = action.payload.institution;
          break;
        case "startDate":
          state.jc.startDate = action.payload.startDate;
          break;
        case "endDate":
          state.jc.endDate = action.payload.endDate;
          break;
        case "grade":
          state.jc.grade = action.payload.grade;
          break;
        default:
          break;
      }
    },
    addDipUni: (state) => {
      state.dipuni = [
        ...state.dipuni,
        {
          edLevel: "",
          institution: "",
          course: "",
          startDate: "",
          endDate: "",
          grade: "",
        },
      ];
    },
    updateDipUni: (state, action) => {
      switch (action.payload.type) {
        case "edLevel":
          state.dipuni[action.payload.index].edLevel = action.payload.edLevel;
          break;
        case "institution":
          state.dipuni[action.payload.index].institution =
            action.payload.institution;
          break;
        case "course":
          state.dipuni[action.payload.index].course = action.payload.course;
          break;

        case "startDate":
          state.dipuni[action.payload.index].startDate =
            action.payload.startDate;
          break;
        case "endDate":
          state.dipuni[action.payload.index].endDate = action.payload.endDate;
          break;
        case "grade":
          state.dipuni[action.payload.index].grade = action.payload.grade;
          break;
        default:
          break;
      }
    },
    deleteDipUni: (state, action) => ({
      ...state,
      dipuni: [
        ...state.dipuni.slice(0, action.payload),
        ...state.dipuni.slice(action.payload + 1),
      ],
    }),
  },
});

export const {
  updateHighestEd,
  updateTutorCat,
  updateYOE,
  updateBio,
  updateSecSch,
  updateJc,
  addDipUni,
  updateDipUni,
  deleteDipUni,
} = userQulificationSlice.actions;

export default userQulificationSlice.reducer;
