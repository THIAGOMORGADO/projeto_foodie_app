import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Acessar sua conta !" />

        {/* Corpo do form */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formGroup}>
            <View style={styles.form}>
              <Input
                label="Email"
                placeholder="Digite seu email..."
                onChangeText={(e) => setEmail(e)}
                value={email}
              />
            </View>

            <View style={styles.form}>
              <Input
                label="Senha"
                placeholder="Senha..."
                onChangeText={(e) => setPassword(e)}
                value={password}
                isPassword
              />
            </View>

            <View>
              <Button title="Login" onPress={handleLogin} />
            </View>
          </View>
        </KeyboardAvoidingView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Registro")}
          >
            <Text style={styles.footerText}>
              Criar minha <Text style={styles.link}>conta</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
