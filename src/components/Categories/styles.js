import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  icone: {
    width: 65,
    height: 65,
  },
  list: {
    paddingRight: 15,
  },
  descricao: {
    fontSize: FONT_SIZE.xsm,
    color: COLORS.dark_gray,
    textAlign: "center",
  },
});
