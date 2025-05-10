import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TypeRootStackParamList } from "../routes/types/ways.types";

export const useTypedNavigation = () => useNavigation<NavigationProp<TypeRootStackParamList>>();
