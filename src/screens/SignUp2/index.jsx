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

export function Registro2() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Informe seu endereço" />

        {/* Corpo do form */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.formGroup}>
            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <Input label="Endereço" placeholder="Digite seu endereço" />
              </View>

              <View style={styles.form30}>
                <Input label="Comple" Type="numeric" />
              </View>
            </View>

            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <Input label="Cidade" placeholder="Digite sua cidade" />
              </View>

              <View style={styles.form30}>
                <Input label="UF" placeholder="UF" />
              </View>
            </View>

            <View style={styles.form}>
              <Input label="CEP" placeholder="digite seu cep" Type="numeric" />
            </View>

            <View>
              <Button title="Criar minha conta" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
