import React, {useState} from 'react';
import ClientSignUpScreenView from "./client-sign-up-screen-view";
import {ScrollView, View} from "react-native";
import TextInputWithLabel from "../../../small-components/text-input-with-label";
import styles from "./client-sign-up-screen-styles";
import {BigLogo} from "../../../small-components/big-logo/big-logo";
import OrangeButton from "../../../small-components/orange-button";

const ClientSignUpScreen = () => {

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ confirmedPassword, setConfirmedPassword ] = useState<string>('');
  const [ phoneNumber, setPhoneNumber ] = useState<string>('');
  const [ lastName, setLastName ] = useState<string>('');
  const [ firstName, setFirstName ] = useState<string>('');

  const emailAndPasswordView = (
    <View>
      <TextInputWithLabel
        label="email"
        setText={setEmail}
        hideText={false}
      />
      <TextInputWithLabel
        label="password"
        setText={setPassword}
        hideText={true}
      />
      <TextInputWithLabel
        label="confirmed password"
        setText={setConfirmedPassword}
        hideText={true}
      />
      <OrangeButton label="Next" onClick={() => onNextClick()} />
    </View>
  )

  const phoneAndNamesView = (
    <View>
      <TextInputWithLabel
        label="phone number"
        setText={setPhoneNumber}
        hideText={false}
      />
      <TextInputWithLabel
        label="last name"
        setText={setLastName}
        hideText={false}
      />
      <TextInputWithLabel
        label="first name"
        setText={setFirstName}
        hideText={false}
      />
    </View>
  )

  const content = emailAndPasswordView;

  const onNextClick = () => {
    console.log('onNextClick');

  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <BigLogo />
          {emailPasswordView}
        </View>
      </ScrollView>
    </View>
  )
}

export default ClientSignUpScreen