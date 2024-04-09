import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray_100,
    height: 56,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 7,

  },
  input: {
    flex: 1,
    color: colors.black,
    fontSize: 16,
    fontFamily: theme.fontFamily.regular,
  },
});
