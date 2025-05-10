import { IUser } from "./user.types";

export interface IAuthFormData extends Pick<IUser, "email" | "password" | "name"> {}

export enum EnumSecureStore {
  TOKEN = "token",
}

export enum EnumAsyncStorage {
  USER = "user",
}

export interface IAuthResponse {
  user: IUser;
}
