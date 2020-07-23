import React, { Component } from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {SelectedOrderOption} from "../../../utils/enums/enums";
import {styles} from "./order-options-switch-style";

type OrderOptionsSwitchPropsType = {
  selectedOrderOption: SelectedOrderOption
  onCurrentOrderOptionClick: () => void
  onPreviousOrderOptionClick: () => void
}

export default class OrderOptionsSwitch extends Component<OrderOptionsSwitchPropsType, any>{

  render() {

    const { selectedOrderOption } = this.props;

    const currentOrdersOptionStyle = selectedOrderOption == SelectedOrderOption.current
      ? [ styles.currentOrdersOption, styles.activeOption ]
      : [ styles.currentOrdersOption, styles.inactiveOption ];

    const previousOrdersOptionStyle = selectedOrderOption == SelectedOrderOption.previous
      ? [ styles.previousOrdersOption, styles.activeOption ]
      : [ styles.previousOrdersOption, styles.inactiveOption ];

    const currentOrdersOptionTitleStyle = selectedOrderOption == SelectedOrderOption.current
      ? styles.activeOptionTitle
      : styles.inactiveOptionTitle;

    const previousOrdersOptionTitleStyle = selectedOrderOption == SelectedOrderOption.previous
      ? styles.activeOptionTitle
      : styles.inactiveOptionTitle;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={currentOrdersOptionStyle}
          onPress={this.props.onCurrentOrderOptionClick}
        >
          <Text style={currentOrdersOptionTitleStyle}>
            Current orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={previousOrdersOptionStyle}
          onPress={this.props.onPreviousOrderOptionClick}
        >
          <Text style={previousOrdersOptionTitleStyle}>
            Previous orders
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
};