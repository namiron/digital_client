import { View } from "react-native";
import { ILaureateData } from "../../screens/laureates/types/laureates.type";
import UiButton from "../../ui/ui-button/Button";
import { styles } from "./styles/pagination.styles";

interface PaginationProps {
  allLaureates: ILaureateData[];
  start: number;
  page: number;
  end: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ allLaureates, start, page, end, setPage }) => {
  const back: string = "Back";
  const forward: string = "Forward";
  return (
    <View style={styles.container}>
      <UiButton
        buttonStyles={[styles.button, page === 0 && styles.buttonDisabled]}
        textStyles={styles.buttonText}
        onPress={() => setPage((prev) => Math.max(prev - 1, 0))}
        disabled={page === 0}
      >
        {back}
      </UiButton>

      <UiButton
        buttonStyles={[styles.button, end >= allLaureates.length && styles.buttonDisabled]}
        textStyles={styles.buttonText}
        onPress={() => setPage((prev) => prev + 1)}
        disabled={end >= allLaureates.length}
      >
        {forward}
      </UiButton>
    </View>
  );
};

export default Pagination;
