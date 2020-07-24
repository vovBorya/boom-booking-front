import { StyleSheet } from "react-native";
import {colors} from "../../../resources/colors";

export const styles = StyleSheet.create({
  containerView: {
    overflow: 'hidden',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 20,
  },
  imageBackground: {
    width: "100%",
    height: 200,
    opacity: 2
  },
  childView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  restaurantNameView: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  restaurantNameTitle: {
    fontSize: 25,
    color: "white"
  },
  dateTimeGuestRow: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  dateTimeGuestsView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  dateTimeGuestsTitle: {
    fontSize: 16,
    color: "white"
  },
  dateTimeGuestsValue: {
    fontSize: 19,
    color: "white"
  },
  locationPriceRow: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  locationPriceView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  detailsButton: {
    marginBottom: 10,
    height: 40,
  }
});