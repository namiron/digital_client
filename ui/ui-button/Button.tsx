import React, { PropsWithChildren } from "react";
import { Pressable, Text } from "react-native";
import { IButton } from "./types/button.type";

const UiButton: React.FC<PropsWithChildren<IButton>> = ({ children, buttonStyles, textStyles, ...rest }) => {
  return (
    <Pressable style={buttonStyles} {...rest}>
      <Text style={textStyles}>{children}</Text>
    </Pressable>
  );
};

export default UiButton;
