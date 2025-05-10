import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export const saveUser = async (user: any) => {
  if (!user.token) throw new Error("Token is missing in user");
  await setItemAsync(TOKEN_KEY, user.token);
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = async () => {
  const json = await AsyncStorage.getItem(USER_KEY);
  return json ? JSON.parse(json) : null;
};

export const getToken = async () => {
  return await getItemAsync(TOKEN_KEY);
};

export const clearStorage = async () => {
  await deleteItemAsync(TOKEN_KEY);
  await AsyncStorage.removeItem(USER_KEY);
};
