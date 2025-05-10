import { Button, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles/main.styles";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>hi my name is Alex is da</Text>
      <Button title="Login" />
      <Button title="log out" />
    </View>
  );
};

export default React.memo(Main);

// email: "alxlxa@gmai.com",
// password: "12345Alx",
