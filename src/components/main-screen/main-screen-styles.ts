import { StyleSheet } from "react-native";
import {colors} from "../../resources/colors";

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: colors.mainBackground
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 20
  },
  searchAndSettings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTitle: {
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 15
  },
  eventItemList: {
    paddingLeft: 15,
    paddingRight: 15
  },
  restaurantItemList: {
    padding: 15,
  }
});

export default styles;