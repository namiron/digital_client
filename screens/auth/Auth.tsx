import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { AuthContext } from "../../providers/auth/auth.context";
import { AuthService } from "../../services/auth/auth.service";
import { styles } from "./styles/auth.styles";
import Field from "../../ui/ui-field/field";
import UiButton from "../../ui/ui-button/Button";

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
      console.error("Auth error", e);
    } finally {
      reset();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{isLogin ? "Login" : "Register"}</Text>

      <View style={styles.form}>
        {!isLogin && <Field control={control} name="name" placeholder="Enter name" rules={{ required: "Name required" }} />}
        <Field control={control} name="email" placeholder="Enter email" rules={{ required: "Email required" }} />
        <Field control={control} name="password" placeholder="Enter password" rules={{ required: "Password required" }} secureTextEntry />

        <UiButton style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}> {isLogin ? "Login" : "Register"}</Text>
        </UiButton>
        <UiButton onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.signUp}>{isLogin ? "No account? Register" : "Already have account? Login"}</Text>
        </UiButton>
      </View>
    </View>
  );
};

export default Auth;
