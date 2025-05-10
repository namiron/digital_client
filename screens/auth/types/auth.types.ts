import { IUser } from "./user.types";

export interface IAuthFormData extends Pick<IUser, "email" | "password" | "name"> {}
