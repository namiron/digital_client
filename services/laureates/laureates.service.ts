import { ILaureateData } from "../../screens/laureates/types/laureates.type";
import { API } from "../api/laureates-root.api";

export const getLaureates = async (category: string): Promise<ILaureateData[]> => {
  try {
    const res = await API.get<{ laureates: ILaureateData[] }>(`/laureates/${category}`);
    return res.data.laureates;
  } catch (error) {
    console.error((error as Error).message);
    return [];
  }
};

export const getCategories = async (): Promise<string[]> => {
  try {
    const res = await API.get<{ categories: string[] }>(`/categories`);
    return res.data.categories;
  } catch (error) {
    console.error((error as Error).message);
    return [];
  }
};
