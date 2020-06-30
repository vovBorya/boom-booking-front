import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    margin: 20
  },
  searchAndSettings: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchPanel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  settingButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  eventView: {
    margin: 20
  }
});

export default styles;