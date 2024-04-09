import { StyleSheet } from "react-native";

import { colors } from "@/theme/colors";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.gray_200,
  },
  header: {
    width: '100%',
    height: 132,
    backgroundColor: colors.blue,

    justifyContent: 'flex-end',
    paddingHorizontal: 24,

    zIndex: 1,

  },

  input: {
    marginBottom: -27,
  },

  section: {
    backgroundColor: theme.colors.blue,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    fontSize: 18,
    width: 34,
    height: 34,
    borderRadius: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 22,
  },
  contentList: {
    padding: 24,
    gap: 12,
    paddingTop: 64,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.gray_300,
    marginTop: 12,
  },
  bottomSheet: {
    backgroundColor: "transparent",
  },

  avatar: {
    alignSelf: "center",
    marginBottom: -50,
    zIndex: 1
  },

  bottomSheetContent: {
    flex: 1,
    backgroundColor: theme.colors.gray_100,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingTop: 54,
    alignItems: 'center',
    padding: 32,
  },
  contactName: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 32,
    color: theme.colors.black,

  },
  phoneNumber: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,

    marginTop: 6,
    marginBottom: 24,
  },
  phone: {
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.gray_400,
  },
});
