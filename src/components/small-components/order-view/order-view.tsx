import React from "react";
import {View, Text, ImageBackground, TouchableOpacity} from "react-native";
import { styles } from "./order-view-styles";

type OrderViewPropsType = {
  key: number
  imageUrl: string
  restaurantName: string
  date: string
  time: string
  guests: string
  location: string
  price: string
}

const OrderView: React.FC<OrderViewPropsType> =
  ({
    imageUrl,
    restaurantName,
    date,
    time,
    guests,
    location,
    price
   }) => {

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
      >
        <View style={styles.childView}>

          <View style={styles.restaurantNameView}>
            <Text style={styles.restaurantNameTitle}>{ restaurantName }</Text>
          </View>

          <View style={styles.dateTimeGuestRow}>
            <View style={styles.dateTimeGuestsView}>
              <Text style={styles.dateTimeGuestsTitle}>Date</Text>
              <Text style={styles.dateTimeGuestsValue}>{ date }</Text>
            </View>

            <View style={styles.dateTimeGuestsView}>
              <Text style={styles.dateTimeGuestsTitle}>Time</Text>
              <Text style={styles.dateTimeGuestsValue}>{ time }</Text>
            </View>

            <View style={styles.dateTimeGuestsView}>
              <Text style={styles.dateTimeGuestsTitle}>Guests</Text>
              <Text style={styles.dateTimeGuestsValue}>{ guests }</Text>
            </View>
          </View>

          <View style={styles.locationPriceRow}>
            <View style={styles.locationPriceView}>
              <Text style={styles.dateTimeGuestsTitle}>Location</Text>
              <Text style={styles.dateTimeGuestsValue}>{ location }</Text>
            </View>

            <View style={styles.locationPriceView}>
              <Text style={styles.dateTimeGuestsTitle}>Price</Text>
              <Text style={styles.dateTimeGuestsValue}>{ price }</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsTitle}>Details</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

};

export default OrderView;