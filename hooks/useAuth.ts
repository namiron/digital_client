import { useContext } from "react";
import { AuthContext } from "../providers/auth/auth.provider";

export const useAuth = ()=>useContext(AuthContext)