import React, { createContext, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { getUser } from "../../services/auth/auth.helper";
import { IUser } from "../../screens/auth/types/user.types";

interface AuthContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      await SplashScreen.preventAutoHideAsync();
      const storedUser = await getUser();
      if (storedUser) setUser(storedUser);
      await SplashScreen.hideAsync();
    };

    loadUser();
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
