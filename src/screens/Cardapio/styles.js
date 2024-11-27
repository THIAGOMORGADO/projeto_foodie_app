import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  banner: {
    alignItems: "center",
  },
  foto: {
    height: 150,
  },
  back: {
    width: 40,
    height: 40,
  },
  btnContainer: {
    position: "absolute",
    top: 30,
    left: 15,
  },
  containerInfo: {
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
  },
  favoriteIcon: {
    width: 40,
    height: 40,
  },
  infoWarp: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.dark_gray,
    marginBottom: 5,
  },
  taxa: {
    fontSize: FONT_SIZE.md,
    color: COLORS.medium_gray,
  },
  locationContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    width: 40,
    height: 40,
    margin: 10,
  },
  locationText: {
    flex: 1,
    fontSize: FONT_SIZE.md,

    color: COLORS.dark_gray,
  },
  containerProduto: {
    padding: 10,
  },
  produtoText: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.dark_gray,
    paddingBottom: 2,
  },
});
