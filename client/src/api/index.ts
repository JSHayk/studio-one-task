import axios from "axios";
import Router from "../const/router";
import { INews } from "../interfaces/news.d";
import {
  IAuthRequest,
  IKeywordsRequest,
  ILoginResponse,
  IMessageResponse,
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

// Auth
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
    const { data } = await $api.post<IMessageResponse>(
      Router.REGISTER,
      sendData
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const $Logout = async () => {
  try {
    const { data } = await $api.get<IMessageResponse>(Router.LOGOUT);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
// News
export const $GetNews = async () => {
  try {
    const { data } = await $api.get<INews[]>(Router.NEWS);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const $GetSpecificNews = async (id: string) => {
  try {
    const { data } = await $api.get<INews>(`${Router.NEWS}/${id}`);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const $AddKeywords = async (
  newsId: string,
  userId: string,
  sendData: IKeywordsRequest
) => {
  try {
    const { data } = await $api.post<IMessageResponse>(
      `${Router.KEYWORDS}/${newsId}/${userId}`,
      sendData
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const $DeleteKeywords = async (newsId: string, userId: string) => {
  try {
    const { data } = await $api.delete<IMessageResponse>(
      `${Router.KEYWORDS}/${newsId}/${userId}`
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const $EditKeywords = async (
  newsId: string,
  keywordsId: string,
  editData: IKeywordsRequest
) => {
  try {
    const { data } = await $api.put<IMessageResponse>(
      `${Router.KEYWORDS}/${newsId}/${keywordsId}`,
      editData
    );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
