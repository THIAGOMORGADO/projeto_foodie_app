import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
  },
  headerBar: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 140,
    height: 27,
  },
  cart: {
    width: 30,
    height: 30,
  },
  search: {
    marginBottom: 10,
    marginTop: 10,
  },
});
