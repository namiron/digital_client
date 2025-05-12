import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { TypeRootStackParamList } from "./types/ways.types";

import Auth from "../screens/auth/Auth";
import { routes } from "./Routes.routes";

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
      {user ? (
        routes.map(({ name, component, options }) => <Stack.Screen key={name} name={name} component={component} options={options} />)
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
