import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import {styles} from "./orders-screen-styles";
import {SelectedOrderOption} from "../../../utils/enums/enums";
import OrderOptionsSwitch from "../../small-components/order-options-switch";

type OrdersScreenStateType = {
  selectedOrderOption: SelectedOrderOption
};

export default class OrdersScreen extends Component<any, OrdersScreenStateType>{

  state = {
    selectedOrderOption: SelectedOrderOption.current
  };

  switchOrderOption = () => {
    this.setState((state) => ({
      ...state,
      selectedOrderOption: state.selectedOrderOption == SelectedOrderOption.current
        ? SelectedOrderOption.previous
        : SelectedOrderOption.current
    }));
  };

  render() {

    const { selectedOrderOption } = this.state;

    return (
      <View style={styles.scrollContainer}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <View style={styles.orderOptions}>
            <OrderOptionsSwitch
              selectedOrderOption={selectedOrderOption}
              switchOrderOption={this.switchOrderOption}
            />
          </View>
        </View>
      </ScrollView>
      </View>
    );
  };
};