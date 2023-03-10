import { IUser } from "../interfaces/user.d";

// Auth
export interface IAuthRequest {
  username: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  user: IUser;
}
export interface IMessageResponse {
  ms: string;
}
// Slice
export interface IAuthState {
  isLoged: boolean;
  data: IUser | null;
}
export interface IAddUser {
  payload: {
    data: IUser;
    token: string;
  };
}
export interface IKeywordsRequest {
  keywords: string;
}
