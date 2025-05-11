import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles/menu.styles";
import { useAuth } from "../../hooks/useAuth";
import { clearStorage } from "../../services/auth/auth.helper";

const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const { setUser, user } = useAuth();

  const toggleMenu = () => setVisible(!visible);

  const handleLogout = async () => {
    await clearStorage();
    setVisible(false);
    setUser(null);
  };

  const exit: string = "Log out";
  const hello: string = "Hello";
  const welcome: string = "Welcome, guest!";
  const email: string = "email:";

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Feather name="menu" size={30} color="#007bff" />
      </TouchableOpacity>

      <Modal visible={visible} animationType="fade" transparent>
        <Pressable style={styles.overlay} onPress={toggleMenu}>
          <Pressable style={styles.menu} onPress={(e) => e.stopPropagation()}>
            <Text style={styles.menuItem} onPress={handleLogout}>
              {exit}
            </Text>
            <View>
              {user ? (
                <View>
                  <Text style={styles.userText}>
                    {hello} {user.name}
                  </Text>
                  <Text style={styles.userText}>
                    {email} {user.email}
                  </Text>
                </View>
              ) : (
                <Text style={styles.userText}>{welcome}</Text>
              )}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default BurgerMenu;
