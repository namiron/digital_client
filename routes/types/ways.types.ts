import { ComponentType } from "react";

export type TypeRootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Laureates: { category: string };
  Item: { laureate: any };
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}
