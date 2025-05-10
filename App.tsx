import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./providers/auth/auth.context";
import PrivateNavigator from "./routes/PrivateNavigator";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <PrivateNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
