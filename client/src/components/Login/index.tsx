import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { $Login } from "../../api";
import { useAppDispatch } from "../../hooks/useRedux";
import { IAuthRequest } from "../../interfaces/auth";
import { addUser } from "../../store/slices/auth.slice";
import Router from "../../const/router";
import AuthForm from "../forms/auth-form";
import Layout from "../Layout";
import { checkAuthValidations } from "../../validations/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const submitForm = useCallback(
    async (sendData: IAuthRequest) => {
      if (!checkAuthValidations(sendData)) return;
      try {
        const { user, token } = await $Login(sendData);
        dispatch(addUser({ data: user, token }));
        toast.success("Successfully Loged!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate(Router.HOME);
        }, 2600);
      } catch (err: any) {
        toast.error("Invalid Fileds!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        throw new Error(err);
      }
    },
    [dispatch, navigate]
  );
  return (
    <Layout>
      <AuthForm
        title="Login"
        text="Don't have an account?"
        link={Router.REGISTER}
        submitForm={submitForm}
      />
      <ToastContainer />
    </Layout>
  );
};

export default memo(Login);
