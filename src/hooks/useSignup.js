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
        dispatch({ type: "Login", payload: user });
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return { signUpWithGooogle };
};
