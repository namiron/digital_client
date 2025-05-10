import { API } from "../api/root.api";
import { saveUser } from "./auth.helper";

export const AuthService = {
  async login(data: { email: string; password: string }) {
    const res = await API.post("/auth/login", data);
    await saveUser(res.data);  
    return res.data;
  },
  async register(data: { name: string; email: string; password: string }) {
    const res = await API.post("/auth/register", data);
    await saveUser(res.data);  
    return res.data;
  },
};
