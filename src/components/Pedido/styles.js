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
    borderRadius: 6,
  },
  textos: {
    flex: 1,
    padding: 10,
  },
  containerValue: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  value: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
    fontWeight: "bold",
  },
  status: {
    color: COLORS.green,
  },
});
