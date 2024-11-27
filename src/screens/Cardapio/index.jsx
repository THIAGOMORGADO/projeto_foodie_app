import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { restaurante } from "../../constants/dados";
import icon from "../../constants/icon";
import ProdutoItem from "../../components/ProdutoItem";

export default function Cardapio() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={restaurante.foto}
          style={styles.foto}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.btnContainer}>
          <Image source={icon.Back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.infoWarp}>
          <Text style={styles.name}>{restaurante.nome}</Text>
          <Text style={styles.taxa}>
            Taxa de entrega.{" "}
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(restaurante.vlEntrega)}
          </Text>
        </View>

        <Image source={icon.favoriteFull2} style={styles.favoriteIcon} />
      </View>

      <View style={styles.locationContainer}>
        <Image source={icon.Location} style={styles.locationIcon} />
        <Text style={styles.locationText}>{restaurante.endereco}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {restaurante.cardapio.map((item) => {
          return (
            <View key={item.idCategoria} style={styles.containerProduto}>
              <Text style={styles.produtoText}>{item.categoria}</Text>

              {item.itens.map((item) => {
                return (
                  <ProdutoItem
                    key={item.idProduto}
                    logotipo={item.foto}
                    nome={item.nome}
                    description={item.descricao}
                    valor={item.valor}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
