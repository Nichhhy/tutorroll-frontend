import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  userType: "",
  loggedIn: false,
};

export const userLoginRegSlice = createSlice({
  name: "userLoginReg",
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
  userLoginRegSlice.actions;

export default userLoginRegSlice.reducer;
