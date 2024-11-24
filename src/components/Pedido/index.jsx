import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function Pedido(props) {
  return (
    <View style={styles.container}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.textos}>
        <Text style={styles.nome}>{props.nome}</Text>
        <View style={styles.containerValue}>
          <Text style={styles.value}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.valor)}
          </Text>
          <Text style={styles.value}>{props.dt_pedido}</Text>
        </View>

        <Text style={styles.status}>{props.status}</Text>
      </View>
    </View>
  );
}
