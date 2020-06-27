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

  const onNextClick = () => {
    console.log('onNextClick');
  }

  return (
    <ClientSignUpScreenView
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmedPassword={setConfirmedPassword}
      setPhoneNumber={setPhoneNumber}
      setLastName={setLastName}
      setFirstName={setFirstName}
    />
  )
}

export default ClientSignUpScreen