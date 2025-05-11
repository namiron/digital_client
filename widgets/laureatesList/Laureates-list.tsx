import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { ILaureateData } from "../../screens/laureates/types/laureates.type";
import UiButton from "../../ui/ui-button/Button";
import { styles } from "./styles/laureates-list.styles";

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
        <UiButton buttonStyles={styles.button} textStyles={{ color: "black" }} onPress={() => gatToLaureate(item)}>
          <View>
            <Text style={styles.name}>
              {item.firstname} {item.surname} ({item.year})
            </Text>
            <Text style={styles.motivation}>{item.motivation}</Text>
          </View>
        </UiButton>
      )}
    />
  );
};
export default LaureatesList;
