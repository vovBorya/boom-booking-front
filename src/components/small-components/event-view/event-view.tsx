import React from "react";
import {View, Image, Text, TouchableOpacity, ImageBackground} from "react-native";
import styles from "./event-view-styles";
import { values } from "../../../constants/values";

type EventViewProps = {
  key: number
  eventName: string
  restaurantName: string
  onEventClick: () => void
};

const EventView: React.FC<EventViewProps> = ({ key, eventName, onEventClick, restaurantName }) => {

  const { TOUCHABLE_ACTIVITY_OPACITY } = values;

  return(
    <TouchableOpacity
      style={{ ...styles.container, ...styles.shadow}}
      activeOpacity={TOUCHABLE_ACTIVITY_OPACITY}
      onPress={onEventClick}
    >
      <ImageBackground style={styles.imageBackground} source={require('../../../resources/img/event.png')}>
        <View style={styles.captionView}>
          <Text style={styles.eventName}>{eventName}</Text>
        </View>
      </ImageBackground>

    </TouchableOpacity>
  );
};

export default EventView;