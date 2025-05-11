import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { TypeRootStackParamList } from "./types/ways.types";
import { routes } from "./Routes.routes";
import Auth from "../screens/auth/Auth";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      {user ? routes.map((route) => <Stack.Screen key={route.name} {...route} />) : <Stack.Screen name="Auth" component={Auth} />}
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
