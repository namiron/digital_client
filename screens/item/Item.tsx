import React from "react";
import { View, Text } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ILaureateData } from "../laureates/types/laureates.type";

const Item = () => {
  const route = useRoute<RouteProp<{ params: { laureate: ILaureateData } }, "params">>();
  const { laureate } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>
        {laureate.firstname} {laureate.surname}
      </Text>
      <Text>Year: {laureate.year}</Text>
      <Text>Motivation: {laureate.motivation}</Text>
      <Text>Category: {laureate.category}</Text>
    </View>
  );
};

export default Item;
