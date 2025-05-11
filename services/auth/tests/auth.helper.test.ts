import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearStorage, getToken, getUser, saveUser } from "../auth.helper";

jest.mock("expo-secure-store", () => ({
  setItemAsync: jest.fn(),
  getItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("storage API", () => {
  const user = { token: "mock-token", name: "John Doe" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should save user and token", async () => {
    (setItemAsync as jest.Mock).mockResolvedValueOnce(undefined);
    (AsyncStorage.setItem as jest.Mock).mockResolvedValueOnce(undefined);

    await saveUser(user);

    expect(setItemAsync).toHaveBeenCalledWith("token", "mock-token");
    expect(AsyncStorage.setItem).toHaveBeenCalledWith("user", JSON.stringify(user));
  });

  it("should throw an error if token is missing when saving user", async () => {
    const invalidUser = { name: "John Doe" };

    await expect(saveUser(invalidUser)).rejects.toThrowError("Token is missing in user");
  });

  it("should get user from AsyncStorage", async () => {
    const mockUser = { token: "mock-token", name: "John Doe" };
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockUser));

    const result = await getUser();

    expect(AsyncStorage.getItem).toHaveBeenCalledWith("user");
    expect(result).toEqual(mockUser);
  });

  it("should return null if user is not found in AsyncStorage", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

    const result = await getUser();

    expect(AsyncStorage.getItem).toHaveBeenCalledWith("user");
    expect(result).toBeNull();
  });

  it("should get token from expo-secure-store", async () => {
    (getItemAsync as jest.Mock).mockResolvedValueOnce("mock-token");

    const token = await getToken();

    expect(getItemAsync).toHaveBeenCalledWith("token");
    expect(token).toBe("mock-token");
  });

  it("should clear user and token from storage", async () => {
    await clearStorage();

    expect(deleteItemAsync).toHaveBeenCalledWith("token");
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith("user");
  });
});
