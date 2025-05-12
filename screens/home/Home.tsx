import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TypeRootStackParamList } from "../../routes/types/ways.types";
import { getCategories } from "../../services/laureates/laureates.service";
import CategoryList from "../../widgets/category-list/Category-list";
import { styles } from "./styles/home.styles";
import BurgerMenu from "../../widgets/menu/Menu";
import { Loading } from "../../ui/ui-loading/Loading";

const Home = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<TypeRootStackParamList>>();
  const [loading, setLoading] = useState<boolean>(false);
  const CATEGORIES: string = "Categories";

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const data = await getCategories();
      setCategories(data);
      setLoading(false);
    };
    get();
  }, []);

  const goToCategory = (item: string) => {
    return navigation.navigate("Laureates", { category: item });
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Text style={styles.title}>{CATEGORIES}</Text>
          <BurgerMenu />
        </View>
        {loading ? <Loading /> : <CategoryList categories={categories} goToCategory={goToCategory} />}
      </View>
    </View>
  );
};

export default Home;
