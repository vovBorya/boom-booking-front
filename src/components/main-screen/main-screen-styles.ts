import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 31.5
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 50
  },
  searchAndSettings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchPanel: {
    marginLeft: 20
  },
  settingButton: {
    marginRight: 20
  },
  viewTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
    marginLeft: 20
  },
  eventScrollView: {
    paddingLeft: 15,
    padding: 10
  },
  restaurantScrollView: {
    padding: 15
  }
});

export default styles;