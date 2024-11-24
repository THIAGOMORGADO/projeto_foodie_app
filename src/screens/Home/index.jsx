import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import icon from "../../constants/icon";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import Categories from "../../components/Categories";

import { banners, categorias, restaurantes } from "../../constants/dados.js";
import Banners from "../../components/Banners";
import Restarante from "../../components/Restaurante";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icon.Logo} style={styles.logo} />
        <Image source={icon.Cart} style={styles.cart} />
      </View>

      <View style={styles.search}>
        <Input
          placeholder="O que vamos pedir hoje? "
          onChangeText={(e) => setSearch(e)}
          value={search}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories dados={categorias} />

        <Banners dados={banners} />

        {restaurantes.map((restaurante, index) => {
          return (
            <View key={index}>
              <Restarante
                nome={restaurante.nome}
                endereco={restaurante.endereco}
                logotipo={restaurante.logotipo}
                icone={icon.favoritoFull}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
