import { auth } from "../Firebase";
import axios from "axios";
import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { updateEmail as updatePersonalEmail } from "../Contexts/Slice/UserPersonalDetailSlice";
import { updateEmail as updatePrefEmail } from "../Contexts/Slice/UserPref";
import { updateEmail as updateQualEmail } from "../Contexts/Slice/UserQualification";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const BACKEND_URL = "http://localhost:8080";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        setUser(result.user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);

        // ...
      })
      .then(() => {
        try {
          axios
            .post(`${BACKEND_URL}/user`, {
              email: email,
              password: password,
              userType: "Tutor",
              loggedIn: true,
            })
            .then((response) => {
              axios.post(`${BACKEND_URL}/tutorStep1/`, {
                email: email,
                firstName: "",
                lastName: "",
                DOB: "",
                phone: "",
                citizenship: "",
                gender: "",
                race: "",
              });
            })
            .then(() => {
              dispatch(updatePersonalEmail(email));
              dispatch(updatePrefEmail(email));
              dispatch(updateQualEmail(email));
            });

          console.log("clicked");
        } catch (err) {
          console.log(err);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);

        // ..
      });
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ googleSignIn, createNewUser, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
