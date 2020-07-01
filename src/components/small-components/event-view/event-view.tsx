import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import styles from "./event-view-styles";
import { values } from "../../../constants/values";

type EventViewProps = {
  onEventClick: () => void
}

const EventView: React.FC<EventViewProps> = ({ onEventClick }) => {

  const { TOUCHABLE_ACTIVITY_OPACITY } = values;

  return(
    <TouchableOpacity
      style={styles.container}
      activeOpacity={TOUCHABLE_ACTIVITY_OPACITY}
      onPress={onEventClick}
    >
      <Image style={styles.imageBackground} source={require('../../../resources/img/event.png')} />
      <View style={styles.captionView}>
        <Text style={styles.eventName}>Событие 1</Text>
        <Text style={styles.eventPlace}>Мед и пиво</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventView;