import React from "react";
import { Text, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ILaureateData } from "../laureates/types/laureates.type";
import { styles } from "./styles/item.styles";

const Item = () => {
  const route = useRoute<RouteProp<{ params: { laureate: ILaureateData } }, "params">>();
  const { laureate } = route.params;

  const affiliationsText = laureate.affiliations?.length
    ? laureate.affiliations.map((affiliation, index) => (
        <Text key={index}>
          {affiliation.name}, {affiliation.city}, {affiliation.country}
        </Text>
      ))
    : null;

  const year: string = "Year:";
  const motivation: string = "Motivation:";
  const country: string = " Country:";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>
        {laureate.firstname} {laureate.surname}
      </Text>
      <Text style={styles.info}>
        {year} <Text style={styles.highlight}>{laureate.year}</Text>
      </Text>
      <Text style={styles.info}>
        {motivation}
        <Text style={styles.highlight}>{laureate.motivation}</Text>
      </Text>
      <Text style={styles.info}>
        {country} <Text style={styles.highlight}>{affiliationsText}</Text>
      </Text>
    </ScrollView>
  );
};

export default Item;
