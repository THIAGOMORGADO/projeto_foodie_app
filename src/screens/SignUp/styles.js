import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginBottom: 15,
  },
  formGroup: {
    width: "100%",
    marginTop: 25,
    marginBottom: 40,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.white,
    marginBottom: 25,
  },
  footerText: {
    textAlign: "center",
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
  },
  link: {
    color: COLORS.red,
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
  },
});
