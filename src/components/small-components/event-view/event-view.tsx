import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import styles from "./event-view-styles";

const EventView: React.FC = () => {

  return(
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image style={styles.imageBackground} source={require('../../../resources/img/event.png')} />
      <View style={styles.descriptionView}>
        <Text style={styles.eventName}>Событие 1</Text>
        <Text style={styles.eventPlace}>Мед и пиво</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventView;