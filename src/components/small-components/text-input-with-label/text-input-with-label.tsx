import {Text, TextInput, View} from "react-native";
import styles from "./text-input-with-label-styles";
import React from "react";

type TextInputWithLabelProps = {
  label: string,
  setText: (newString: string) => void,
  hideText: boolean
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({ label, setText, hideText }) => {

  return (
    <View style={styles.labelAndInput}>
      <Text>{ label }</Text>
      <TextInput
        style={styles.input}
        // @ts-ignore
        textAlign="center"
        onChangeText={setText}
        secureTextEntry={hideText}
      />
    </View>
  )
}

export default TextInputWithLabel
