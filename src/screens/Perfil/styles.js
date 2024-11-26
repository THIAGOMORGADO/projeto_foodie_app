import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingLeft: 12,
    paddingRight: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  perfilInfo: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
  value: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  more: {
    width: 20,
    height: 20,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
  },
});
