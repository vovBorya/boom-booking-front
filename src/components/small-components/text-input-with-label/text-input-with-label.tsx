import {Text, TextInput, View} from "react-native";
import styles from "./text-input-with-label-styles";
import React from "react";
import {InputState} from "../../../utils/enums/enums";

type TextInputWithLabelProps = {
  label: string
  setText: (newString: string) => void
  hideText: boolean
  inputState: InputState
  description: string
};

const TextInputWithLabel: React.FC<TextInputWithLabelProps> =
  ({
     label,
     setText,
     hideText,
     inputState= InputState.unused,
     description
  }) => {

  const getInputStyle = (state: InputState): any => {
    switch (state) {
      case InputState.valid:
        return {...styles.input, ...styles.validInput};
      case InputState.invalid:
        return {...styles.input, ...styles.invalidInput};
      case InputState.unused:
        return {...styles.input, ...styles.unusedInput};
    }
  }

  const contentDescription = inputState == InputState.invalid ?
    <Text style={styles.description}>
        {description}
    </Text> : null;

  return (
    <View style={styles.labelAndInput}>
      <Text>{ label }</Text>
      <TextInput
        style={getInputStyle(inputState)}
        // @ts-ignore
        textAlign="center"
        onChangeText={setText}
        secureTextEntry={hideText}
      />
      {contentDescription}
    </View>
  );
};

export default TextInputWithLabel;
