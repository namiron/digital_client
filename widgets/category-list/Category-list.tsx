import { View, Text, TouchableOpacity, FlatList } from "react-native";

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
          <View style={{ padding: 15, backgroundColor: "#ddd", marginBottom: 10 }}>
            <Text style={{ fontSize: 18 }}>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default CategoryList;
