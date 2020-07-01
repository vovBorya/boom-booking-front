import React from "react";
import {Text, View, ScrollView} from "react-native";
import styles from "./main-screen-styles";
import SearchPanel from "../small-components/search-panel";
import SettingButton from "../small-components/setting-button";
import EventView from "../small-components/event-view";
import RestaurantView from "../small-components/restaurant-view";

const MainScreen: React.FC = () => {

  const onEventClick = () => {
    console.log('onEventClick');
  }

  const onHeartClick = () => {
    console.log('onHeartClick');
  }

  const onRestaurantClick = () => {
    console.log('onRestaurantClick');
  }

  return(
    <View style={styles.scrollContainer}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <View style={styles.searchAndSettings}>
            <View style={styles.searchPanel}>
              <SearchPanel />
            </View>
            <View style={styles.settingButton}>
              <SettingButton />
            </View>
          </View>

          <Text style={styles.viewTitle} >События</Text>
          <ScrollView style={styles.eventScrollView} horizontal={true}>
              <EventView onEventClick={onEventClick} />
              <EventView onEventClick={onEventClick} />
              <EventView onEventClick={onEventClick} />
          </ScrollView>

          <Text style={styles.viewTitle}>Заведения</Text>
          <ScrollView style={styles.restaurantScrollView}>
            <RestaurantView onHeartClick={onHeartClick} onRestaurantClick={onRestaurantClick} />
            <RestaurantView onHeartClick={onHeartClick} onRestaurantClick={onRestaurantClick}/>
            <RestaurantView onHeartClick={onHeartClick} onRestaurantClick={onRestaurantClick}/>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;