import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 20
  },
  buttonsAndPictureView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"/*,
    backgroundColor: "black",*/
  },
  personImage: {
    borderRadius: 200,
    height: 150,
    width: 150
  },
  logoutAndCardsButtons: {
    height: 40,
  },
  detailsView: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    marginBottom: 180,
    padding: 5
  },
  nameView: {
    alignItems: "center",
    padding: 12,
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 1,
  },
  nameText: {
    fontSize: 18
  },
  title: {
    color: "#555",
    fontSize: 14
  },
  changePasswordButton: {
    alignItems: "center",
    marginTop: 20,
    height: 40
  }
})