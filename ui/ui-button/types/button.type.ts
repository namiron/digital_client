import { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IButton extends PressableProps {
  buttonStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}
