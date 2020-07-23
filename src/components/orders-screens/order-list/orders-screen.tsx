import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import {styles} from "./orders-screen-styles";
import {SelectedOrderOption} from "../../../utils/enums/enums";
import OrderOptionsSwitch from "../../small-components/order-options-switch";
import Spinner from "../../small-components/loader";
import ItemList from "../../small-components/item-list";
import OrderView from "../../small-components/order-view";

type OrdersScreenStateType = {
  selectedOrderOption: SelectedOrderOption
  loading: boolean
  error: any
  data: any
};

const dummyData = [
  {key:1, imageUrl: 'https://www.ahstatic.com/photos/b3g8_rsr001_00_p_1024x768.jpg', restaurantName: 'Milana', date: '22/22/11', time: '33:22', guests: '2 people',  location: 'Odessa', price: '$200'},
  {key:2, imageUrl: 'https://www.ahstatic.com/photos/b3g8_rsr001_00_p_1024x768.jpg', restaurantName: 'Milana', date: '22/22/11', time: '33:22', guests: '2 people',  location: 'Odessa', price: '$200'},
  {key:3, imageUrl: 'https://www.ahstatic.com/photos/b3g8_rsr001_00_p_1024x768.jpg', restaurantName: 'Milana', date: '22/22/11', time: '33:22', guests: '2 people',  location: 'Odessa', price: '$200'},
  {key:4, imageUrl: 'https://www.ahstatic.com/photos/b3g8_rsr001_00_p_1024x768.jpg', restaurantName: 'Milana', date: '22/22/11', time: '33:22', guests: '2 people',  location: 'Odessa', price: '$200'},
  {key:5, imageUrl: 'https://www.ahstatic.com/photos/b3g8_rsr001_00_p_1024x768.jpg', restaurantName: 'Milana', date: '22/22/11', time: '33:22', guests: '2 people',  location: 'Odessa', price: '$200'}
]

export default class OrdersScreen extends Component<any, OrdersScreenStateType>{

  state = {
    selectedOrderOption: SelectedOrderOption.current,
    loading: true,
    error: null,
    data: null
  };

  switchOrderOption = () => {
    this.setState((state) => ({
      ...state,
      selectedOrderOption: state.selectedOrderOption == SelectedOrderOption.current
        ? SelectedOrderOption.previous
        : SelectedOrderOption.current
    }));
  };

  onCurrentOrderOptionClick = () => {
    this.setState({ selectedOrderOption: SelectedOrderOption.current });
  }

  onPreviousOrderOptionClick = () => {
    this.setState({ selectedOrderOption: SelectedOrderOption.previous });
  }

  render() {

    const { selectedOrderOption, loading, data } = this.state;

    /*const orderContent = ( loading )
      ?
      <ScrollView>
        <ItemList
        style={styles.orderItemList}
          date={[]}
          renderItem={(item) =>
            <OrderView
              key={1}
              restaurantNameView={''}
              date={''}
              time={''}
              guests={''}
              location={''}
              price={''}
            />
          }
        />
      </ScrollView>
      : <Spinner />*/

    return (
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.viewContainer}>
            <View style={styles.orderOptions}>
              <OrderOptionsSwitch
                selectedOrderOption={selectedOrderOption}
                onCurrentOrderOptionClick={this.onCurrentOrderOptionClick}
                onPreviousOrderOptionClick={this.onPreviousOrderOptionClick}
              />
            </View>

            <View>
              <ScrollView>
                <ItemList
                  style={styles.orderItemList}
                  data={dummyData}
                  renderItem={(item) =>
                    <OrderView
                      key={item.key}
                      imageUrl={item.imageUrl}
                      restaurantName={item.restaurantName}
                      date={item.date}
                      time={item.time}
                      guests={item.guests}
                      location={item.location}
                      price={item.price}
                    />
                  }
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };
};