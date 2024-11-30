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
    marginBottom: 5,
  },
  valor: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.dark_gray,
    marginBottom: 5,
    textAlign: "right",
  },
  headerObs: {
    width: "100%",
    padding: 10,
  },
  textArea: {
    flex: 1,
    backgroundColor: COLORS.light_gray,
    padding: 10,
    color: COLORS.dark_gray,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.gray,
    minHeight: 150,
    textAlignVertical: "top",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
  },
  btnQtd: {
    flexDirection: "row",
  },
  imgQtd: {
    width: 40,
    height: 40,
  },
});
