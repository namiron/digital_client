import { NavigationContainer } from "@react-navigation/native";
import PrivateNavigator from "./PrivateNavigator";

export function Ways() {
  return (
    <NavigationContainer>
      <PrivateNavigator />
    </NavigationContainer>
  );
}
