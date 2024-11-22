import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: COLORS.light_gray,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 6,
  },
  label: {
    marginLeft: 5,
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    marginBottom: 10,
  },
});
