import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
    marginBottom: 15,
    overflow: 'hidden',
    borderRadius: 35
  },
  imageBackground: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '100%',
    height: 200
  },
  touchableIcon: {
    backgroundColor: '#2c2c2c',
    height: 60,
    width: 60,
    padding: 5,
    borderBottomLeftRadius: 35
  },
  icon: {
    width: 50,
    height: 50
  },
  captionView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2c2c2c',
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 12
  },
  restaurantNameView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  restaurantName: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  restaurantAddressView: {},
  restaurantAddress: {
    color: 'white',
    fontSize: 15
  },
  starAndKitchen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  star: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rating: {
    fontSize: 17,
    color: 'white',
    marginRight: 5
  },
  kitchenView: {
  },
  kitchenText: {
    color: 'white',
    fontSize: 12,
  }
});

export default styles;