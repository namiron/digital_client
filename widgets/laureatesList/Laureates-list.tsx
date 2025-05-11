import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { ILaureateData } from "../../screens/laureates/types/laureates.type";

interface LaureatesListProps {
  currentLaureates: ILaureateData[];
  gatToLaureate: (i: ILaureateData) => void;
}

const LaureatesList: React.FC<LaureatesListProps> = ({ currentLaureates, gatToLaureate }) => {
  return (
    <FlatList
      data={currentLaureates}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => gatToLaureate(item)}>
          <View style={{ padding: 10, backgroundColor: "#f1eaea", marginBottom: 5 }}>
            <Text>
              {item.firstname} {item.surname} ({item.year})
            </Text>
            <Text>{item.motivation}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default LaureatesList;
