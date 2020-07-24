import React, { Component } from "react";
import {Image, Text, View} from "react-native";
import { styles } from "./profile-screen-styles";
import {SmallOrangeButton} from "../small-components/small-orange-button/small-orange-button";

interface ProfileScreenState {

}

const imageUri: string = 'https://www.pikpng.com/pngl/m/541-5413318_matt-round-png-round-portrait-pic-png-clipart.png'

export default class ProfileScreen extends Component<any, ProfileScreenState> {
  state = {

  };

  render() {

    return (
      <View style={styles.containerView}>

        <View style={styles.buttonsAndPictureView}>
          <SmallOrangeButton style={styles.logoutAndCardsButtons} text="Log out" />
          <Image style={styles.personImage} source={require('../../resources/img/person.png')} />
          <SmallOrangeButton style={styles.logoutAndCardsButtons} text="Cards" />
        </View>

        <View style={styles.detailsView}>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>Nickol</Text>
            <Text style={styles.nameText}>Shevchenko</Text>
          </View>

          <View style={styles.nameView}>
            <Text style={styles.title}>Email</Text>
            <Text>email@gmail.com</Text>
          </View>

          <View style={styles.nameView}>
            <Text style={styles.title}>Phone</Text>
            <Text>+1243535354634</Text>
          </View>

          <View style={styles.nameView}>
            <Text style={styles.title}>Birth day</Text>
            <Text>12/07/2001</Text>
          </View>

          <View style={styles.nameView}>
            <Text style={styles.title}>Gender</Text>
            <Text>Female</Text>
          </View>

          <SmallOrangeButton style={styles.changePasswordButton} text="Change password" />
        </View>
      </View>
    );
  };
};