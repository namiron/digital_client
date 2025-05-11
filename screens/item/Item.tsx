import React from "react";
import { Text, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ILaureateData } from "../laureates/types/laureates.type";
import { styles } from "./styles/item.styles";

const Item = () => {
  const route = useRoute<RouteProp<{ params: { laureate: ILaureateData } }, "params">>();
  const { laureate } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>
        {laureate.firstname} {laureate.surname}
      </Text>
      <Text style={styles.info}>
        Year: <Text style={styles.highlight}>{laureate.year}</Text>
      </Text>
      <Text style={styles.info}>
        Motivation: <Text style={styles.highlight}>{laureate.motivation}</Text>
      </Text>
      <Text style={styles.info}>
        Category: <Text style={styles.highlight}>{laureate.category}</Text>
      </Text>
    </ScrollView>
  );
};

export default Item;
