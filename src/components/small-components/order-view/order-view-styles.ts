import { StyleSheet } from "react-native";
import {colors} from "../../../resources/colors";

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 20,
  },
  imageBackground: {
    width: "100%",
    height: 220,
    opacity: 2
  },
  childView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.4)'
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
    alignItems: "center",
  },
  dateTimeGuestsTitle: {
    fontSize: 14,
    color: "white"
  },
  dateTimeGuestsValue: {
    fontSize: 17,
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
    alignItems: "center",
  },
  detailsButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 5,
    width: 70,
    height: 40,
    backgroundColor: colors.defaultBorder,
    borderRadius: 20,
  },
  detailsTitle: {
    fontSize: 14,
    color: "white"
  }
});