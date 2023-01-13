import axios from "axios";
import Router from "../const/router";
import { INews } from "../interfaces/news.d";
import {
  IAuthRequest,
  ILoginResponse,
  IRegisterResponse,
} from "../interfaces/auth.d";

export const BASE_URL = "http://localhost:8080/api";

const $api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Setting JWT Token.
$api.interceptors.request.use(
  (config: any) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const $Login = async (sendData: IAuthRequest) => {
  try {
    const { data } = await $api.post<ILoginResponse>(Router.LOGIN, sendData);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const $Register = async (sendData: IAuthRequest) => {
  try {
    const { data } = await $api.post<IRegisterResponse>(
      Router.REGISTER,
      sendData
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const $GetNews = async () => {
  try {
    const { data } = await $api.get<INews[]>(Router.NEWS);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
