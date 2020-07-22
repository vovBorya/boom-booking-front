import { StyleSheet } from 'react-native'
import {colors} from "../../../resources/colors";

const styles = StyleSheet.create({
  scrollContainer: {
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 20
  },
  imageBackground: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-end",
    height: 150,
    width: 150
  },
  captionView: {
    height: 40,
    backgroundColor: '#2c2c2c',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: "center"
  },
  eventName: {
    fontSize: 14,
    color: 'white'
  },
  eventPlace: {
    color: 'white'
  },
  shadow: {
    elevation: 15,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.5
  }
});

export default styles;