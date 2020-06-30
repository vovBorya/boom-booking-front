import { StyleSheet } from 'react-native'
import {colors} from "../../../resources/colors";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden'
  },
  imageBackground: {
    height: 150,
    width: 150
  },
  descriptionView: {
    backgroundColor: '#2c2c2c',
    alignItems: 'center'
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  eventPlace: {
    color: 'white'
  }
});

export default styles;