import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  logotipo: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    padding: 10,
  },
  favorites: {
    width: 30,
    height: 30,
  },
  nome: {
    color: COLORS.dark_gray,
    marginBottom: 3,
    fontSize: FONT_SIZE.sm,
  },
  endereco: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
});
