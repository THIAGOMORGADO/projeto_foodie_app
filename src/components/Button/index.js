import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={props.onPress}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
}
