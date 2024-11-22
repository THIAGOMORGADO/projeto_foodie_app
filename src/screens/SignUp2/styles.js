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
    marginBottom: 25,
  },
  formGroup: {
    width: "100%",
    marginTop: 25,
    marginBottom: 25,
  },
  footer: {
    width: "100%",
    position: "relative",
    top: 100,

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
  formHorizontal: {
    flexDirection: "row",
  },
  form70: {
    width: "70%",
    marginBottom: 15,
    marginRight: 10,
  },
  form30: {
    width: "30%",
    marginBottom: 10,
  },
});
