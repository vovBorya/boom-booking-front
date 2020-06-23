import React from 'react';
import SignUpScreenView from "./sign-up-screen-view";

type SignUpScreenProps = {}

// @ts-ignore
const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {

  const onClientPress = (): void => {
    navigation.navigate('clientSignUp')
  }

  const onAdminPress = (): void => {
    navigation.navigate('adminSignUp')
  }

  return (
    <SignUpScreenView
      onClientPress={onClientPress}
      onAdminPress={onAdminPress}
    />
  )
}

export default SignUpScreen