import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ways } from "./routes/Ways.routes";
import AuthProvider from "./providers/auth/auth.provider";

export default function App() {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <Ways />
        </SafeAreaProvider>
      </AuthProvider>
    </>
  );
}
