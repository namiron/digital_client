import { AuthService } from "../auth.service";
import { API } from "../../api/users-root.api";
import { saveUser } from "../auth.helper";

jest.mock("../../api/users-root.api", () => ({
  API: {
    post: jest.fn(),
  },
}));

jest.mock("../auth.helper", () => ({
  saveUser: jest.fn(),
}));

describe("AuthService", () => {
  const mockUser = { token: "mock-token", name: "John", email: "john@example.com" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should login and save user", async () => {
    (API.post as jest.Mock).mockResolvedValueOnce({ data: mockUser });

    const result = await AuthService.login({
      email: "john@example.com",
      password: "password123",
    });

    expect(API.post).toHaveBeenCalledWith("/auth/login", {
      email: "john@example.com",
      password: "password123",
    });

    expect(saveUser).toHaveBeenCalledWith(mockUser);
    expect(result).toEqual(mockUser);
  });

  it("should register and save user", async () => {
    (API.post as jest.Mock).mockResolvedValueOnce({ data: mockUser });

    const result = await AuthService.register({
      name: "John",
      email: "john@example.com",
      password: "password123",
    });

    expect(API.post).toHaveBeenCalledWith("/auth/register", {
      name: "John",
      email: "john@example.com",
      password: "password123",
    });

    expect(saveUser).toHaveBeenCalledWith(mockUser);
    expect(result).toEqual(mockUser);
  });
});
