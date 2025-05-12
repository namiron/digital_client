import React, { createContext, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { getUser } from "../../services/auth/auth.helper";
import { IUser } from "../../screens/auth/types/user.types";
import { Loading } from "../../ui/ui-loading/Loading";

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        const storedUser = await getUser();
        if (storedUser) setUser(storedUser);
      } catch (error) {
        console.error((error as Error).message);
      } finally {
        await SplashScreen.hideAsync();
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
