import React, { useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Restarante(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.title}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.endereco}>{props.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={props.icone} style={styles.favorites} />
      </TouchableOpacity>
    </View>
  );
}
