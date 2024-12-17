import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfid";
import { signOut } from "firebase/auth";

export const useSignout = () => {
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon");
      })
      .catch((error) => {
        toast.error("error.maasage");
      });
  };
  return { userSignout };
};
