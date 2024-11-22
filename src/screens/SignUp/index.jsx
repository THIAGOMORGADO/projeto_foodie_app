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
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

export function Registro(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Acessar sua conta" />

        {/* Corpo do form */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formGroup}>
            <View style={styles.form}>
              <Input
                label="Nome"
                placeholder="Digite seu nome..."
                onChangeText={(e) => setName(e)}
                value={name}
                Type="email-address"
              />
            </View>

            <View style={styles.form}>
              <Input
                label="email"
                placeholder="Digite seu email..."
                onChangeText={(e) => setEmail(e)}
                value={email}
                Type="email-address"
              />
            </View>

            <View style={styles.form}>
              <Input
                label="Senha"
                placeholder="Escolha uma senha..."
                isPassword
                onChangeText={(e) => setPassword(e)}
                value={password}
              />
            </View>

            <View style={styles.form}>
              <Input
                label="Confirma a Senha"
                placeholder="Sconfirme a senha..."
                isPassword
                onChangeText={(e) => setConfirmPassword(e)}
                value={confirmPassword}
              />
            </View>

            <View>
              <Button
                title="Proximo passo"
                onPress={() => props.navigation.navigate("Registro2")}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
