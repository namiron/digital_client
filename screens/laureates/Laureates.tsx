// src/screens/Laureates/Laureates.tsx
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { ILaureateData } from "./types/laureates.type";
import { TypeRootStackParamList } from "../../routes/types/ways.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getLaureates } from "../../services/laureates/laureates.service";
import Pagination from "../../widgets/pagination/Pagination";
import LaureatesList from "../../widgets/laureatesList/Laureates-list";
import { Loading } from "../../ui/ui-loading/Loading";

const Laureates = () => {
  const [allLaureates, setAllLaureates] = useState<ILaureateData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(0);
  const LIMIT: number = 5;
  const start = page * LIMIT;
  const end = start + LIMIT;
  const currentLaureates = allLaureates.slice(start, end);

  const route = useRoute<RouteProp<TypeRootStackParamList, "Laureates">>();
  const navigation = useNavigation<NativeStackNavigationProp<TypeRootStackParamList>>();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await getLaureates(route.params.category);
      setAllLaureates(data);
      setPage(0);
      setLoading(false);
    };
    load();
  }, [route.params.category]);

  const gatToLaureate = (item: ILaureateData) => {
    return navigation.navigate("Item", { laureate: item });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Category: {route.params.category}</Text>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <LaureatesList currentLaureates={currentLaureates} gatToLaureate={gatToLaureate} />
          <Pagination allLaureates={allLaureates} start={start} end={end} page={page} setPage={setPage} />
        </View>
      )}
    </View>
  );
};

export default Laureates;
