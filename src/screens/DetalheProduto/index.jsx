import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";

import icon from "../../constants/icon";

export default function DetalheProduto(props) {
  function goBack() {
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={icon.Produto} style={styles.foto} resizeMode="cover" />

        <TouchableOpacity style={styles.btnContainer} onPress={goBack}>
          <Image source={icon.Back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.infoWarp}>
          <Text style={styles.name}>Pizza de calabresa</Text>
          <Text style={styles.taxa}>
            Massa artesanal, mussarela e calabresa. Serve de 3 a 4 pessoas.
            Molho e tomate 100% Natural e ingredientes selecionado
          </Text>
          <Text style={styles.valor}>R$ 30,00</Text>
        </View>
      </View>

      <View style={styles.headerObs}>
        <Text style={styles.taxa}>Observação</Text>

        <TextInput style={styles.textArea} multiline numberOfLines={5} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnQtd}>
          <Image source={icon.plus} style={styles.imgQtd} />
        </TouchableOpacity>
        <Text style={styles.qtd}>1</Text>
        <TouchableOpacity>
          <Image source={icon.menos} style={styles.imgQtd} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
