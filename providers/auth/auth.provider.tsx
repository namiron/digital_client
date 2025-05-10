import * as React from "react";
import { IContext, TypeUserState } from "../types/auth.type";
import * as SplashScreen from "expo-splash-screen";

export const AuthContext = React.createContext({} as IContext);

const AuthProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = React.useState<TypeUserState>(null);

  React.useEffect(() => {
    const checkToken = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.error("Error during splash screen handling", error);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    checkToken();
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
