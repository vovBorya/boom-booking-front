import React from "react";
import {View, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import {colors} from "../../../resources/colors";

const SearchPanel: React.FC = ({}) => {

  return(
    <View style={styles.searchBorder}>
      <TouchableOpacity style={styles.searchTouchable}>
        <Image style={styles.searchTouchable} source={require('../../../resources/img/icons/search-o.png')} />
      </TouchableOpacity>
      <TextInput style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBorder: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    width: 150,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: "black",
    backgroundColor: colors.mainBackground
  },
  searchTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40,
    width: 40,
    marginLeft: 2
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
  }
})

export default SearchPanel