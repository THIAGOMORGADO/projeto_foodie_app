import React from "react";
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
              <Input label="Nome" placeholder="Digite seu nome..." />
            </View>

            <View style={styles.form}>
              <Input
                label="email"
                placeholder="Digite seu email..."
                isPassword
              />
            </View>

            <View style={styles.form}>
              <Input
                label="Senha"
                placeholder="Escolha uma senha..."
                isPassword
              />
            </View>

            <View style={styles.form}>
              <Input
                label="Confirma a Senha"
                placeholder="Sconfirme a senha..."
                isPassword
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
