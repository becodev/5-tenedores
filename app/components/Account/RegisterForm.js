import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  const onSubmit = () => {
    console.log(formData);
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
        onChange={(e) => onChange(e, "email")}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChange={(e) => onChange(e, "password")}
      />
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showRepeatedPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatedPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowRepeatedPassword(!showRepeatedPassword)}
          />
        }
        onChange={(e) => onChange(e, "repeatPassword")}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
    </View>
  );
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  inputForm: {
    width: "100%",
    marginTop: 5,
  },
  btnContainerRegister: {
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
