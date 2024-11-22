import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

export function Registro2() {
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");

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
                <Input
                  label="Endereço"
                  placeholder="Digite seu endereço"
                  onChangeText={(e) => setEndereco(e)}
                  value={endereco}
                />
              </View>

              <View style={styles.form30}>
                <Input
                  label="N"
                  Type="numeric"
                  onChangeText={(e) => setNumero(e)}
                  value={numero}
                />
              </View>
            </View>

            <View style={styles.form}>
              <Input
                label="Bairro"
                placeholder="bairro"
                onChangeText={(e) => setBairro(e)}
                value={bairro}
              />
            </View>

            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <Input
                  label="Cidade"
                  placeholder="Digite sua cidade"
                  onChangeText={(e) => setCidade(e)}
                  value={cidade}
                />
              </View>

              <View style={styles.form30}>
                <Input
                  label="UF"
                  placeholder="UF"
                  onChangeText={(e) => setUf(e)}
                  value={uf}
                />
              </View>
            </View>

            <View style={styles.form}>
              <Input
                label="CEP"
                placeholder="digite seu cep"
                Type="numeric"
                onChangeText={(e) => setCep(e)}
                value={cep}
              />
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
