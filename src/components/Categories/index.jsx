import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Categories(props) {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.dados.map((categorie, index) => {
          return (
            <View key={index} style={styles.list}>
              <TouchableOpacity>
                <Image source={categorie.icone} style={styles.icone} />
                <Text style={styles.descricao}>{categorie.descricao}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
