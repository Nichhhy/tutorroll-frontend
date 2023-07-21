import { configureStore } from "@reduxjs/toolkit";
import userPersonalReducer from "./Slice/UserPersonalDetailSlice";
import userPrefReducer from "./Slice/UserPref";
import userQualificationReducer from "./Slice/UserQualification";
import userLogInReducer from "./Slice/UserLogIn";
import userLogInRegReducer from "./Slice/UserLoginReg";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
};

const userPersonalPersistConfig = {
  key: "userPersonal",
  storage,
};

const userLoginPersistConfig = {
  key: "userLogin",
  storage,
};
const userLoginRegPersistConfig = {
  key: "userLoginReg",
  storage,
};
const userPrefPersistConfig = {
  key: "userPref",
  storage,
};
const userQualificationPersistConfig = {
  key: "userQualification",
  storage,
};

const rootReducer = combineReducers({
  userPersonal: persistReducer(userPersonalPersistConfig, userPersonalReducer),
  userLogin: persistReducer(userLoginPersistConfig, userLogInReducer),
  userLoginReg: persistReducer(userLoginRegPersistConfig, userLogInRegReducer),
  userPref: persistReducer(userPrefPersistConfig, userPrefReducer),
  userQualification: persistReducer(
    userQualificationPersistConfig,
    userQualificationReducer
  ),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
