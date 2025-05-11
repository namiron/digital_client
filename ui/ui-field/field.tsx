import React from "react";
import { Controller } from "react-hook-form";
import { TextInput, Text, View } from "react-native";
import { IField } from "./types/field.types";
import { styles } from "./styles/field.styles";

const Field = <T extends Record<string, any>>({ control, name, rules, placeholder, ...rest }: IField<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={[styles.input, error && styles.inputError]}
            onChangeText={onChange}
            value={(value || "").toString()}
            placeholder={placeholder}
            {...rest}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default Field;
