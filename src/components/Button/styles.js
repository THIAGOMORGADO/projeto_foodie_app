import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  containerButton: {
    width: "100%",

    backgroundColor: COLORS.red,
    borderRadius: 6,
  },
  buttonTitle: {
    fontSize: FONT_SIZE.md,
    color: "#FFF",
    padding: 14,
    textAlign: "center",
  },
});
