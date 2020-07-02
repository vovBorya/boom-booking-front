import {Image, Text, TextInput, View} from "react-native";
import styles from "./text-input-with-label-styles";
import React from "react";
import {InputState} from "../../../utils/enums/enums";
import { shadow } from "../../../constants/shadow";

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

  const getInputStyle = (inputState: InputState): any => {
    switch (inputState) {
      case InputState.valid:
        return [styles.input, styles.validInput, styles.shadow];
      case InputState.invalid:
        return [styles.input, styles.invalidInput, styles.shadow];
      case InputState.unused:
        return [styles.input, styles.unusedInput, styles.shadow];
    }
  };

  const getInputIcon = (inputState: InputState) => {
    switch (inputState) {
      case InputState.valid:
        return require('../../../resources/img/icons/yes.png');
      case InputState.invalid:
        return require('../../../resources/img/icons/no.png');
      case InputState.unused:
        return null;
    }
  }

  const contentDescription = inputState == InputState.invalid
    ?
      <Text style={styles.description}>
          {description}
      </Text>
    : null;

  return (
    <View style={styles.labelAndInput}>
      <Text>{ label }</Text>
        <View style={getInputStyle(inputState)}>
          <TextInput
            style={styles.textInput}
            // @ts-ignore
            textAlign="center"
            onChangeText={setText}
            secureTextEntry={hideText}
          />
          <Image
            style={styles.icon}
            source={getInputIcon(inputState)}
          />
        </View>
      {contentDescription}
    </View>
  );
};

export default TextInputWithLabel;
