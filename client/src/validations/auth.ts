import { toast } from "react-toastify";
import { IAuthRequest } from "../interfaces/auth";
import { passwordRegex, usernameRegex } from "./index";

export const checkAuthValidations = (data: IAuthRequest) => {
  if (!data.username.match(usernameRegex)) {
    toast.error("Incorrect username!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return;
  }
  if (!data.password.match(passwordRegex)) {
    toast.error("Incorrect password!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return;
  }
  return true;
};
