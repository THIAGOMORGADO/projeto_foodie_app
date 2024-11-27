import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export default function ProdutoItem(props) {
  return (
    <TouchableOpacity
      key={props.IdProduto}
      style={styles.container}
      onPress={() => onPress()}
    >
      <Image source={props.logotipo} style={styles.foto} />

      <View style={styles.ProdutoItem}>
        <Text style={styles.title}>{props.nome}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>

      <View>
        {props.valor >= 0 && (
          <Text style={styles.priceValue}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.valor)}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
