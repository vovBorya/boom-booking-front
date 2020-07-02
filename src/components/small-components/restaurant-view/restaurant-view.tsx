import React, { useState } from "react";
import {View, TouchableOpacity, ImageBackground, Text, Image} from "react-native";
import styles from './restaurant-view-styles';
import { values } from "../../../constants/values";

export type RestaurantInfo = {
  id: number
  name: string
  categories: { title: string }
}

type RestaurantViewProps = {
  restaurantInfo: RestaurantInfo
  /*id: number
  name: string
  categories: { title: string }*/
  onHeartClick: () => void
  onRestaurantClick: () => void
}

const RestaurantView: React.FC<RestaurantViewProps> =
  ({
    restaurantInfo,
    onHeartClick,
    onRestaurantClick
   }) => {

  const { id, name, categories } = restaurantInfo;

  const { TOUCHABLE_ACTIVITY_OPACITY } = values;

  const [ isFavorite, setIsFavorite ] = useState<boolean>(false);

  const heartIcon = isFavorite
    ? require('../../../resources/img/icons/heart-o.png')
    : require('../../../resources/img/icons/heart-full-o.png');

  const onFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onHeartClick();
  }

  return(
    <TouchableOpacity
      style={styles.container}
      activeOpacity={TOUCHABLE_ACTIVITY_OPACITY}
      onPress={onRestaurantClick}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../resources/img/restaurant.jpg')}
      >
        <TouchableOpacity
          style={styles.touchableIcon}
          activeOpacity={TOUCHABLE_ACTIVITY_OPACITY}
          onPress={onFavoriteClick}
        >
          <Image
            style={styles.icon}
            source={heartIcon}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.captionView}>
        <View>
          <View style={styles.restaurantNameView}>
            <Text style={styles.restaurantName}>{ name }</Text>
          </View>
          <View style={styles.restaurantAddressView}>
            <Text style={styles.restaurantAddress}>
              ул. Пушкина, дом Колотушкина
            </Text>
          </View>
        </View>

        <View style={styles.starAndKitchen}>
          <View style={styles.star}>
            <Text style={styles.rating}>3/5</Text>
            <Image
              style={styles.icon}
              source={require('../../../resources/img/icons/star-o.png')} />
          </View>

          <Text style={styles.kitchenText} >{ categories.title }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantView;