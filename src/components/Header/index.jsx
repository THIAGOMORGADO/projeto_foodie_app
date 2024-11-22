import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import icon from "../../constants/icon";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Image source={icon.Logo} style={styles.imgLogo} />
      <Text style={styles.titleHeader}>{props.title}</Text>
    </View>
  );
}
