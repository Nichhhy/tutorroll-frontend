import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  userType: "",
  loggedIn: false,
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateUserType: (state, action) => {
      state.userType = action.payload;
    },
    updateLogin: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { updateEmail, updatePassword, updateUserType, updateLogin } =
  userLoginSlice.actions;

export default userLoginSlice.reducer;
