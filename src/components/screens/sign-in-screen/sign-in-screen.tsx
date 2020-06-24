import React, { useState } from 'react';
import SignInScreenView from "./sign-in-screen-view";
import { connect } from "react-redux";
import {AccountType, saveAccount} from '../../../actions';

type SignInScreenProps = {

}

// @ts-ignore
const SignInScreen: React.FC<SignInScreenProps> = ({ navigation, saveAccount }) => {

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const ACTIVITY_OPACITY: number = 0.7;

  const onSignInClick = (email: string, password: string): void => {
    console.log('sign in')
  }

  const onSignUpClick = (): void => {
    navigation.navigate('signUp')
  }

  const onFBClick = (): void => {
    console.log('fb')
  }

  const onGoogleClick = (): void => {
    console.log('google')
  }

  return (
    <SignInScreenView
      setLogin={setEmail}
      setPassword={setPassword}
      activityOpacity={ACTIVITY_OPACITY}
      signIn={() => onSignInClick(email, password)}
      signUp={onSignUpClick}
      facebookSingIn={onFBClick}
      googleSignIn={onGoogleClick}
    />
  )
};

const mapDispatchToProps = (dispatch: any) => ({
  saveAccount: (account: AccountType) => {
    dispatch(saveAccount(account))
  }
});

export default connect(null, mapDispatchToProps)(SignInScreen);
