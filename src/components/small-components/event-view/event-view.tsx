import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import styles from "./event-view-styles";
import { values } from "../../../constants/values";

type EventViewProps = {
  event: {
    id: number
    name: string
  }
  restaurantName: string
  onEventClick: () => void
};

const EventView: React.FC<EventViewProps> = ({ event, onEventClick, restaurantName }) => {

  const { TOUCHABLE_ACTIVITY_OPACITY } = values;

  return(
    <TouchableOpacity
      style={{ ...styles.container, ...styles.shadow}}
      activeOpacity={TOUCHABLE_ACTIVITY_OPACITY}
      onPress={onEventClick}
    >
      <Image style={styles.imageBackground} source={require('../../../resources/img/event.png')} />
      <View style={styles.captionView}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={styles.eventPlace}>{restaurantName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventView;