import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles/category-list.styles";
interface CategoryListProps {
  categories: string[];
  goToCategory: (i: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, goToCategory }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => goToCategory(item)}>
          <View style={styles.category}>
            <Text style={styles.text}>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default CategoryList;
