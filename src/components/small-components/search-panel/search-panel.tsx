import React from "react";
import {View, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import {colors} from "../../../resources/colors";

const SearchPanel: React.FC = ({}) => {

  return(
    <View style={style.searchBorder}>
      <TouchableOpacity style={style.searchTouchable}>
        <Image style={style.searchTouchable} source={require('../../../resources/img/icons/search.png')} />
      </TouchableOpacity>
      <TextInput style={style.textInput} />
    </View>
  )
}

const style = StyleSheet.create({
  searchBorder: {
    flex: 1,
    flexDirection: 'row',
    height: 45,
    width: 150,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.defaultBorder
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