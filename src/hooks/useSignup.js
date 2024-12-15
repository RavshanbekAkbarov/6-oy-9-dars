import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfid";
import { toast } from "react-toastify";
import { GlobalContext } from "../context/globalContext";
import { useContext } from "react";

export const useSignup = () => {
  const { dispatch } = useContext(GlobalContext);
  const signUpWithGooogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorMessage);
      });
  };
  return { signUpWithGooogle };
};
