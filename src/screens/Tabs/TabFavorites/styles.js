import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../../global/theme";

export const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingLeft: 12,
    paddingRight: 12,
  },
  emptyContainer: {
    flexGrow: 1,
  },
  emptyContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  emptyText: {
    textAlign: "center",
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
  },
});
