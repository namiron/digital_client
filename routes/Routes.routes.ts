import Auth from "../screens/auth/Auth";
import Home from "../screens/home/Home";
import { IRoute } from "./types/ways.types";

export const routes: IRoute[] = [
  {
    name: "Auth",
    component: Auth,
  },
  {
    name: "Home",
    component: Home,
  },
];
