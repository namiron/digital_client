import Home from "../screens/home/Home";
import Item from "../screens/item/Item";
import Laureates from "../screens/laureates/Laureates";
import { IRoute } from "./types/ways.types";

export const routes: IRoute[] = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Laureates",
    component: Laureates,
  },
  {
    name: "Item",
    component: Item,
  },
];
