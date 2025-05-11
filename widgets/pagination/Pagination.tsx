import { View } from "react-native";
import { ILaureateData } from "../../screens/laureates/types/laureates.type";
import UiButton from "../../ui/ui-button/Button";

interface PaginationProps {
  allLaureates: ILaureateData[];
  start: number;
  page: number;
  end: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ allLaureates, start, page, end, setPage }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
      <UiButton
        buttonStyles={{ padding: 10, backgroundColor: "#ccc", borderRadius: 5, opacity: page === 0 ? 0.5 : 1 }}
        textStyles={{ color: "black" }}
        onPress={() => setPage((prev) => Math.max(prev - 1, 0))}
        disabled={page === 0}
      >
        ← Назад
      </UiButton>

      <UiButton
        buttonStyles={{ padding: 10, backgroundColor: "#ccc", borderRadius: 5, opacity: end >= allLaureates.length ? 0.5 : 1 }}
        textStyles={{ color: "black" }}
        onPress={() => setPage((prev) => prev + 1)}
        disabled={end >= allLaureates.length}
      >
        Вперёд →
      </UiButton>
    </View>
  );
};

export default Pagination;
