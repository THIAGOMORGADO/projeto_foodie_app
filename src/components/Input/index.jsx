import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export default function Input(props) {
  return (
    <View>
      {props.label && <Text style={styles.label}>{props.label}</Text>}

      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={(e) => props.onChangeText(e)}
        value={props.value}
        keyboardType={props.Type}
      />
    </View>
  );
}
