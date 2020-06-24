import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./client-sign-up-screen-styles";
import TextInputWithLabel from "../../../small-components/text-input-with-label";
// @ts-ignore
import translate from '../../../../utils/i18n'
import {BigLogo} from "../../../small-components/big-logo/big-logo";

type ClientSignUpScreenViewProps = {
  setEmail: (newString: string) => void
  setPassword: (newString: string) => void
  setConfirmedPassword: (newString: string) => void
  setPhoneNumber: (newString: string) => void
  setLastName: (newString: string) => void
  setFirstName: (newString: string) => void
}

const ClientSignUpScreenView: React.FC<ClientSignUpScreenViewProps> =
  ({
    setEmail,
    setPassword,
    setConfirmedPassword,
    setPhoneNumber,
    setLastName,
    setFirstName
  }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <BigLogo />
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
      </ScrollView>
    </View>
  )
}

export default ClientSignUpScreenView