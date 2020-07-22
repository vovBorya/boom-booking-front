import React from "react";
import {View, TouchableOpacity, ImageBackground, Text, Image} from "react-native";
import styles from './restaurant-view-styles';
import { values } from "../../../constants/values";
import StarIcon from "../../../resources/img/icons/star.svg";

export type RestaurantInfo = {
  name: string
  categories: { title: string }
}

type RestaurantViewProps = {
  key: number
  restaurantInfo: RestaurantInfo
  onRestaurantClick: () => void
}

const RestaurantView: React.FC<RestaurantViewProps> =
  ({
    restaurantInfo,
    onRestaurantClick
   }) => {

  const { name, categories } = restaurantInfo;

  const { TOUCHABLE_ACTIVITY_OPACITY } = values;

    return(
    <TouchableOpacity
      style={[styles.scrollContainer, styles.shadow]}
      activeOpacity={TOUCHABLE_ACTIVITY_OPACITY}
      onPress={onRestaurantClick}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../resources/img/restaurant.jpg')}
      >
        <View style={styles.captionView}>

          <View style={styles.restaurantNameAndKitchenView}>
            <Text style={styles.restaurantName}>{ name }</Text>
          </View>

          <View style={styles.distanceView}>
            <Text style={styles.distanceText}>500m</Text>

            <Text style={styles.kitchenText} >{ categories.title }Italian</Text>

            <View style={styles.star}>
              <Text style={styles.rating}>3.0</Text>
              <StarIcon width={20} height={20} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default RestaurantView;