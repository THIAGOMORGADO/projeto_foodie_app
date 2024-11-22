import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  imgLogo: {
    width: 170,
    height: 50,
  },
  titleHeader: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  },
});
