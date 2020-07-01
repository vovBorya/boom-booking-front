import React from "react";
import {View, TouchableOpacity, ImageBackground, Text, Image} from "react-native";
import styles from './restaurant-view-styles';
import { values } from "../../../constants/values";

const RestaurantView: React.FC = () => {

  const { TOUCHABLE_ACTIVITY_OPACITY } = values;

  return(
    <TouchableOpacity
      style={styles.container}
      activeOpacity={TOUCHABLE_ACTIVITY_OPACITY}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../resources/img/restaurant.jpg')}
      >
        <TouchableOpacity
          style={styles.touchableIcon}
          activeOpacity={TOUCHABLE_ACTIVITY_OPACITY} >
          <Image
            style={styles.icon}
            source={require('../../../resources/img/icons/heart.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.captionView}>
        <View>
          <View style={styles.restaurantNameView}>
            <Text style={styles.restaurantName}>Ресторан 1</Text>
          </View>
          <View style={styles.restaurantAddressView}>
            <Text style={styles.restaurantAddress}>ул. Пушкина, дом Колотушкина</Text>
          </View>
        </View>

        <View style={styles.starAndKitchen}>
          <View style={styles.star}>
            <Text style={styles.rating}>3/5</Text>
            <TouchableOpacity activeOpacity={TOUCHABLE_ACTIVITY_OPACITY}>
              <Image
                style={styles.icon}
                source={require('../../../resources/img/icons/star.png')} />
            </TouchableOpacity>
          </View>

          <Text style={styles.kitchenText} >Афганская</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantView;