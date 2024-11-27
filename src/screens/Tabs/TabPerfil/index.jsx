import React from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import icon from "../../../constants/icon";

export default function TabPerfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.item, styles.borderTop]}>
        <View>
          <Image source={icon.endereco} style={styles.icon} />
        </View>

        <View style={styles.perfilInfo}>
          <Text style={styles.label}>Endereço</Text>
          <Text style={styles.value}>Rua 123, 1234</Text>
        </View>

        <View>
          <Image source={icon.mais} style={styles.more} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View>
          <Image source={icon.dados} style={styles.icon} />
        </View>

        <View style={styles.perfilInfo}>
          <Text style={styles.label}>Meu dados</Text>
          <Text style={styles.value}>Informaçoes da minha conta</Text>
        </View>

        <View>
          <Image source={icon.mais} style={styles.more} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View>
          <Image source={icon.logout} style={styles.icon} />
        </View>

        <View style={styles.perfilInfo}>
          <Text style={styles.label}>Desconectar</Text>
          <Text style={styles.value}>
            Desconnectar seu usuario desse aparelho
          </Text>
        </View>

        <View>
          <Image source={icon.mais} style={styles.more} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
