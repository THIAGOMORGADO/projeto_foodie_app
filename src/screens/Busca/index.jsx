import React from "react";
import { View, Text, FlatList, Image } from "react-native";

import { styles } from "./styles";
import Restarante from "../../components/Restaurante";
import { restaurantes } from "../../constants/dados";
import icon from "../../constants/icon";

export default function Buscar() {
  return (
    <View style={styles.conteiner}>
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Restarante
            nome={item.nome}
            endereco={item.endereco}
            logotipo={item.logotipo}
            icone={icon.favoriteFull2}
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
