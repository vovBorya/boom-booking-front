import React from "react";
import {Text, View, ScrollView, FlatList, SafeAreaView} from "react-native";
import styles from "./main-screen-styles";
import SearchPanel from "../small-components/search-panel";
import SettingButton from "../small-components/setting-button";
import EventView from "../small-components/event-view";
import RestaurantView from "../small-components/restaurant-view";
import { RESTAURANTS } from "../../constants/queries/restaurants";
import {useQuery} from "@apollo/react-hooks";
import SpinnerScreen from "../small-components/loader";

const MainScreen: React.FC = () => {

  const { loading, error, data } = useQuery(RESTAURANTS, {
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
          <View>
            <FlatList
              style={styles.eventView}
              data={data.events}
              renderItem={({ item }) => (
                <EventView
                  event={item}
                  restaurantName={item.restaurant.name}
                  onEventClick={onEventClick}
                />
              )}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
            />
          </View>

          <Text style={styles.viewTitle}>Заведения</Text>
          <SafeAreaView style={styles.restaurantView}>
            <FlatList
              data={data.restaurants}
              renderItem={({ item }) => (
                <RestaurantView
                  restaurantInfo={item}
                  onHeartClick={onHeartClick}
                  onRestaurantClick={onRestaurantClick}
                />
              )}
              keyExtractor={item => item.id.toString()}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;