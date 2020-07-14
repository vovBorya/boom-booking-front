import React from "react";
import {Text, View, ScrollView, FlatList, SafeAreaView} from "react-native";
import styles from "./main-screen-styles";
import SearchPanel from "../small-components/search-panel";
import SettingButton from "../small-components/setting-button";
import EventView from "../small-components/event-view";
import RestaurantView from "../small-components/restaurant-view";
import { RESTAURANT_AND_EVENTS } from "../../constants/queries/restaurants-and-events";
import {useQuery} from "@apollo/react-hooks";
import SpinnerScreen from "../small-components/loader";
import ItemList from "../small-components/item-list";

const MainScreen: React.FC = () => {

  const { loading, error, data } = useQuery(RESTAURANT_AND_EVENTS, {
    variables: {"restaurantSearchOptions": {},
                "eventSearchOptions": {} }
  });

  const onEventClick = () => {
    console.log('onEventClick');
  }

  const onHeartClick = () => {
    console.log('onHeartClick');
  }

  const onRestaurantClick = () => {
    console.log('onRestaurantClick');
  }

  if (loading) return <SpinnerScreen />;

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
          <ScrollView horizontal={true}>
            <ItemList
              style={styles.eventView}
              data={data.events}
              renderItem={item =>
                <EventView
                  key={item.id}
                  eventName={item.name}
                  restaurantName={item.restaurant.name}
                  onEventClick={onEventClick}
                />}
              horizontal={true}
            />
          </ScrollView>

          <Text style={styles.viewTitle}>Заведения</Text>
          <ScrollView>
            <ItemList
              style={styles.restaurantView}
              data={data.restaurants}
              renderItem={ item  =>
                <RestaurantView
                  key={item.id}
                  restaurantInfo={item}
                  onHeartClick={onHeartClick}
                  onRestaurantClick={onRestaurantClick}
                />}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;