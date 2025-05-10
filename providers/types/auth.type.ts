import { Dispatch, SetStateAction } from "react";

interface IUser {
  id?: string;
  email: string;
  password: string;
  name?: string;
  token?: string;
}

export type TypeUserState = IUser | null;

export interface IContext {
  user: TypeUserState;
  setUser: Dispatch<SetStateAction<TypeUserState>>;
}
