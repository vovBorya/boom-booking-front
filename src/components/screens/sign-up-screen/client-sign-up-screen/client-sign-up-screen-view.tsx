import React from "react";
import {ScrollView, View} from "react-native";
import styles from "./client-sign-up-screen-styles";
import TextInputWithLabel from "../../../small-components/text-input-with-label";
// @ts-ignore
import {BigLogo} from "../../../small-components/big-logo/big-logo";
import OrangeButton from "../../../small-components/orange-button";
import {InputState} from "../../../../utils/enums/enums";

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
            inputState={InputState.unused}
            description={''}
          />
          <TextInputWithLabel
            label="password"
            setText={setPassword}
            hideText={true}
            inputState={InputState.unused}
            description={''}
          />
          <TextInputWithLabel
            label="confirmed password"
            setText={setConfirmedPassword}
            hideText={true}
            inputState={InputState.unused}
            description={''}
          />
          <TextInputWithLabel
            label="phone number"
            setText={setPhoneNumber}
            hideText={false}
            inputState={InputState.unused}
            description={''}
          />
          <TextInputWithLabel
            label="last name"
            setText={setLastName}
            hideText={false}
            inputState={InputState.unused}
            description={''}
          />
          <TextInputWithLabel
            label="first name"
            setText={setFirstName}
            hideText={false}
            inputState={InputState.unused}
            description={''}
          />
          <OrangeButton label="Next" onClick={() => console.log('next')} />
        </View>
      </ScrollView>
    </View>
  )
}

export default ClientSignUpScreenView