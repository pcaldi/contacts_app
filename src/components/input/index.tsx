
import { View, TextInput, ViewProps, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/colors";


function Input({ children, style }: ViewProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>);
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={colors.gray_300}
      {...rest}
    />
  )

}

Input.Field = Field;

export { Input };
