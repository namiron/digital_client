import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TypeRootStackParamList } from "../../routes/types/ways.types";
import { useAuth } from "../../hooks/useAuth";
import { getCategories } from "../../services/laureates/laureates.service";
import CategoryList from "../../widgets/category-list/Category-list";

const Home = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<TypeRootStackParamList>>();
  const { user } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      const data = await getCategories();
      setCategories(data);
      console.log(user);
    };
    fetch();
  }, []);
  const goToCategory = (item: string) => {
    return navigation.navigate("Laureates", { category: item });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Категории:</Text>
      <CategoryList categories={categories} goToCategory={goToCategory} />
    </View>
  );
};

export default Home;
