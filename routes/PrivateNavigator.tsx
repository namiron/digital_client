import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./types/ways.types";
import { routes } from "./Routes.routes";
import { useAuth } from "../hooks/useAuth";
import Auth from "../screens/auth/Auth";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigator = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
