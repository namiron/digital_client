import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { styles } from "./styles/auth.styles";
import { IAuthFormData } from "./types/auth.types";
import { HAVE_LOGIN, LOGIN, REGISTER, SIGN_UP } from "./constants/auth.constants";
import { Loading } from "../../ui/ui-loading/Loading";
import UiButton from "../../ui/ui-button/Button";
import Field from "../../ui/ui-field/field";

const Auth: React.FC = () => {
  //--------------------------
  const [isReg, setIsReg] = useState(true);
  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });
  const isLoading = false;
  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    console.log(data);
    reset();
  };
  //--------------------------

  return (
    <View style={styles.wrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Text style={styles.title}>{isReg ? LOGIN : REGISTER}</Text>
          <View style={styles.form}>
            {isReg ? "" : <Field control={control} name="name" placeholder="Enter name" rules={{ required: "Name is required" }} />}
            <Field
              control={control}
              name="email"
              placeholder="Enter email"
              keyboardType="email-address"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              }}
            />
            <Field
              control={control}
              name="password"
              placeholder="Enter password"
              secureTextEntry
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum length is 6 characters",
                },
              }}
            />
            <UiButton onPress={handleSubmit(onSubmit)} buttonStyles={styles.button} textStyles={styles.buttonText}>
              {isReg ? LOGIN : REGISTER}
            </UiButton>
            <UiButton buttonStyles={styles.signUp} onPress={() => setIsReg((prev) => !prev)}>
              <Text style={styles.signUp}>
                {isReg ? SIGN_UP : HAVE_LOGIN} <Text style={styles.accountLink}>{isReg ? REGISTER : LOGIN}</Text>
              </Text>
            </UiButton>
          </View>
        </>
      )}
    </View>
  );
};

export default Auth;
