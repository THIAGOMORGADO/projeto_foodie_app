import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { restaurantes } from "../../../constants/dados";
import Restarante from "../../../components/Restaurante";
import icon from "../../../constants/icon";
import { styles } from "./styles";

export default function TabFavorites() {
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
            icone={icon.remover}
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
