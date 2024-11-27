import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { pedidos } from "../../../constants/dados";

import icon from "../../../constants/icon";
import { styles } from "./styles";
import Pedido from "../../../components/Pedido";

export default function TabPedidos() {
  return (
    <View style={styles.conteiner}>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pedido
            nome={item.nome}
            status={item.status}
            dt_pedido={item.dt_pedido}
            logotipo={item.logotipo}
            valor={item.vl_total}
          />
        )}
        contentContainerStyle={styles.emptyContainer}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyContent}>
              <Image source={icon.empty} />
              <Text style={styles.emptyText}>
                Você ainda não favoritou nenhum restaurante.
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
