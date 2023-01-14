import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { $Register } from "../../api";
import { IAuthRequest } from "../../interfaces/auth";
import AuthForm from "../forms/auth-form";
import Router from "../../const/router";
import Layout from "../Layout";
import { checkAuthValidations } from "../../validations/auth";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const submitForm = useCallback(
    async (sendData: IAuthRequest) => {
      if (!checkAuthValidations(sendData)) return;
      try {
        await $Register(sendData);
        toast.success("Successfully registered!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate(Router.LOGIN);
        }, 2600);
      } catch (err: any) {
        toast.error("Invalid Fileds!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        throw new Error(err);
      }
    },
    [navigate]
  );
  return (
    <Layout>
      <AuthForm
        title="Register"
        text="Already registered?"
        link={Router.LOGIN}
        submitForm={submitForm}
      />
      <ToastContainer />
    </Layout>
  );
};

export default memo(Register);
