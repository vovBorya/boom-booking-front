import styles from "../sign-in-page/login-page-styles";
import {Text, TextInput, View} from "react-native";
import React from "react";

type TextInputFieldProps = {
  label: string,
  setState: (newString: string) => void
}

const TextInputField: React.FC<TextInputFieldProps> = ({label, setState}) => {
  return (
    <View style={styles.labelAndInput}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        textAlign="center"
        onChangeText={setState}
      />
    </View>
  )
}

export default TextInputField
