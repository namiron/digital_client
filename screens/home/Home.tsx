import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { clearStorage } from "../../services/auth/auth.helper";
import { AuthContext } from "../../providers/auth/auth.context";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await clearStorage();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Добро пожаловать домой!</Text>
      <Button title="Выйти из аккаунта" onPress={handleLogout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
