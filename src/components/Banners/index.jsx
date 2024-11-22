import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Banners(props) {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.dados.map((banner, index) => {
          return (
            <View key={index} style={styles.list}>
              <TouchableOpacity>
                <Image source={banner.icone} style={styles.icone} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
