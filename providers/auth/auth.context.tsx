import React, { createContext, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { getUser } from "../../services/auth/auth.helper";

export const AuthContext = createContext({
  user: null,
  setUser: (_: any) => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

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
