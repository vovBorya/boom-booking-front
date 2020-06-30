import React from "react";
import {Text, View, ScrollView} from "react-native";
import styles from "./main-screen-styles";
import SearchPanel from "../small-components/search-panel";
import SettingButton from "../small-components/setting-button";
import EventView from "../small-components/event-view";

const MainScreen: React.FC = () => {

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
          <ScrollView style={styles.eventView} horizontal={true}>
            <EventView />
            <EventView />
            <EventView />
            <EventView />
            <EventView />
          </ScrollView>

          <Text style={{ fontSize: 42 }}>Loremerunt mollit anim i
            d est laborumLoremerunt mollit anim i
            d est laborum</Text>

        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;