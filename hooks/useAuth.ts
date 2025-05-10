import { useContext } from "react";
import { AuthContext } from "../providers/auth/auth.context";

export const useAuth = () => useContext(AuthContext);
