import React from "react";
import {View, StyleSheet, TouchableOpacity, Image, TextInput} from "react-native";
import SearchPanel from "../search-panel";
import {colors} from "../../../resources/colors";
import SearchIcon from "../../../resources/img/icons/search.svg";

const MainHeader = () => {

  return(
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.searchBorder}>
        <TouchableOpacity style={styles.searchTouchable}>
          <SearchIcon />
        </TouchableOpacity>
        <TextInput style={styles.textInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.defaultBorder,
    height: 60,
    width: "100%",
    padding: 7,
    marginTop: 31.5
  },
  searchPanel: {
  },
  searchBorder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 270,
    borderRadius: 30,
    backgroundColor: colors.mainBackground
  },
  searchTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    width: 50,
    marginLeft: 10
  },
  searchIcon: {
    height: 25,
    width: 25,
  },
  textInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  shadow: {
    elevation: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.5
  }
})

export default MainHeader;