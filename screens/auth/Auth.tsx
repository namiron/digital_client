import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { AuthContext } from "../../providers/auth/auth.context";
import { AuthService } from "../../services/auth/auth.service";
import { styles } from "./styles/auth.styles";
import Field from "../../ui/ui-field/Field";
import UiButton from "../../ui/ui-button/Button";
import {
  E_EMAIL,
  E_NAME,
  E_PASSWORD,
  HAVE_LOGIN,
  LOGIN,
  R_EMAIL,
  R_NAME,
  R_PASSWORD,
  REGISTER,
  SIGN_UP,
} from "./constants/auth.constants";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { setUser } = useContext(AuthContext);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const user = isLogin ? await AuthService.login(data) : await AuthService.register(data);
      setUser(user);
    } catch (e) {
      console.error((e as Error).message);
    } finally {
      reset();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{isLogin ? LOGIN : REGISTER}</Text>

      <View style={styles.form}>
        {!isLogin && <Field control={control} name="name" placeholder={E_NAME} rules={{ required: R_NAME }} />}
        <Field control={control} name="email" placeholder={E_EMAIL} rules={{ required: R_EMAIL }} />
        <Field control={control} name="password" placeholder={E_PASSWORD} rules={{ required: R_PASSWORD }} secureTextEntry />

        <UiButton style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}> {isLogin ? LOGIN : REGISTER}</Text>
        </UiButton>
        <UiButton onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.signUp}>
            {isLogin ? (
              <Text style={styles.text}>
                {SIGN_UP} <Text style={styles.accountLink}>{REGISTER}</Text>
              </Text>
            ) : (
              <Text style={styles.text}>
                {HAVE_LOGIN} <Text style={styles.accountLink}>{LOGIN}</Text>
              </Text>
            )}
          </Text>
        </UiButton>
      </View>
    </View>
  );
};

export default Auth;
