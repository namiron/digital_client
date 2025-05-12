import Home from "../screens/home/Home";
import Item from "../screens/item/Item";
import Laureates from "../screens/laureates/Laureates";
import { IRoute } from "./types/ways.types";
import BurgerMenu from "../widgets/menu/Menu";

export const routes: IRoute[] = [
  {
    name: "Home",
    component: Home,
    options: {
      headerTitle: "",
      headerRight: () => <BurgerMenu />,
    },
  },
  {
    name: "Laureates",
    component: Laureates,
  },
  {
    name: "Info",
    component: Item,
    options: {
      headerTitle: "",
    },
  },
];
