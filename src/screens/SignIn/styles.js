import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 40,

    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  formGroup: {
    width: "100%",
    marginTop: 50,
    marginBottom: 40,
  },
  footer: {
    width: "100%",
    position: "relative",
    top: 100,

    marginBottom: 40,
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
