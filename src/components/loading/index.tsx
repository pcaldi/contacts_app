import { ActivityIndicator } from "react-native";

import { styles } from "./styles"
import { colors } from "@/theme/colors";


export function Loading() {
  return (
    <ActivityIndicator style={styles.loading} color={colors.blue} size={32} />
  )
}
