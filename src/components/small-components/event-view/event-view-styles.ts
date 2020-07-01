import { StyleSheet } from 'react-native'
import {colors} from "../../../resources/colors";

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 20,
    overflow: 'hidden'
  },
  imageBackground: {
    height: 180,
    width: 180
  },
  captionView: {
    backgroundColor: '#2c2c2c',
    alignItems: 'center'
  },
  eventName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  eventPlace: {
    color: 'white'
  }
});

export default styles;