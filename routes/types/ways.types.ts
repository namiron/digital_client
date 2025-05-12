import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ComponentType } from "react";

export type TypeRootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Laureates: { category: string };
  Info: { laureate: any };
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType<any>;
  options?: NativeStackNavigationOptions;
}
