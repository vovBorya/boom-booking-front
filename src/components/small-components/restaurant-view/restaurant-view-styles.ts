import { StyleSheet } from "react-native";
import {colors} from "../../../resources/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginBottom: 15,
    overflow: 'hidden',
    borderRadius: 15
  },
  imageBackground: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-end",
    width: '100%',
    height: 150
  },
  captionView: {
    height: 60,
    backgroundColor: '#2c2c2c',
    opacity: 0.8,
  },
  restaurantNameAndKitchenView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  restaurantName: {
    color: 'white',
    fontSize: 18,
    lineHeight: 21
  },
  kitchenText: {
    color: 'white',
    fontSize: 14
  },
  distanceView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10
  },
  distanceText: {
    color: colors.mainBackground,
    fontSize: 16
  },
  star: {
    flexDirection: "row"
  },
  rating: {
    fontSize: 17,
    color: 'white',
    marginRight: 5
  },
  shadow: {
    elevation: 15,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.5
  }
});

export default styles;