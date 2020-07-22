import React from "react";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./sign-up-screen-styles";
import {BigLogo} from "../../../small-components/big-logo/big-logo";
import SignUpIcon from "../../../small-components/sign-up-icon";

type SignUpScreenViewProps = {
  onClientPress: () => void
  onAdminPress: () => void
}

const SignUpScreenView: React.FC<SignUpScreenViewProps> = ({ onClientPress, onAdminPress }) => {

  return(
    <View style={styles.scrollContainer}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <BigLogo />
          <View style={styles.selectionBlock}>
            <View style={styles.userSignUp}>
              <Text style={styles.label}>Visitor</Text>
              <TouchableOpacity style={styles.touchable} onPress={onClientPress}>
                <Image
                  style={styles.icon}
                  source={require('../../../../resources/img/icons/visitor1.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.adminSignUp}>
              <Text style={styles.label}>Restaurant</Text>
              <TouchableOpacity style={styles.touchable} onPress={onAdminPress}>
                <Image
                  style={styles.icon}
                  source={require('../../../../resources/img/icons/restaurant.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreenView;