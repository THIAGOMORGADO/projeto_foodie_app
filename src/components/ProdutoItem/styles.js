import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  ProdutoItem: {
    padding: 8,
    flex: 1,
  },
  title: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.sm,
  },
  description: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  priceValue: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.sm,
  },
});
