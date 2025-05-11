import React from "react";
import { Text, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ILaureateData } from "../laureates/types/laureates.type";
import { styles } from "./styles/item.styles";

const Item = () => {
  const route = useRoute<RouteProp<{ params: { laureate: ILaureateData } }, "params">>();
  const { laureate } = route.params;

  const validAffiliations = Array.isArray(laureate.affiliations)
    ? laureate.affiliations.filter(
        (aff) => aff && typeof aff === "object" && !Array.isArray(aff) && ("name" in aff || "city" in aff || "country" in aff)
      )
    : [];

  const affiliationsText =
    validAffiliations.length > 0
      ? validAffiliations.map((affiliation, index) => (
          <Text key={index}>
            {affiliation.name} {affiliation.city} {affiliation.country}
          </Text>
        ))
      : null;

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
      {affiliationsText ? (
        <Text style={styles.info}>
          Country: <Text style={styles.highlight}>{affiliationsText}</Text>
        </Text>
      ) : null}
    </ScrollView>
  );
};

export default Item;
