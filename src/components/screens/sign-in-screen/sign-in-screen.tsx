import React, {useState} from 'react';
import SignInScreenView from "./sign-in-screen-view";
import {connect} from "react-redux";
import {AccountType, saveAccount} from '../../../actions';
import {InputState} from "../../../utils/enums/enums";

type SignInScreenProps = {

}

// @ts-ignore
const SignInScreen: React.FC<SignInScreenProps> = ({ navigation, saveAccount }) => {

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ emailState, setEmailState ] = useState<InputState>(InputState.unused);
  const [ passwordState, setPasswordState ] = useState<InputState>(InputState.unused);

  const isEmailValid = (email: string) => /^[.\-_A-Za-z0-9]+?@[.\-A-Za-z0-9]+?\.[A-Za-z0-9]{2,6}$/.test(email);

  const isPasswordValid = (password: string) => /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(password)

  const ACTIVITY_OPACITY: number = 0.7;

  const onSignInClick = (email: string, password: string): void => {
    console.log('sign in')
  }

  const onChangeEmail = (newEmail: string) => {
    if (isEmailValid(newEmail)) {
      setEmailState(InputState.valid)
    } else setEmailState(InputState.invalid)
    setEmail(newEmail)
    console.log('change email')
  }

  const onChangePassword = (newPassword: string) => {
    if(isPasswordValid(newPassword)) {
      setPasswordState(InputState.valid)
    } else setPasswordState(InputState.invalid)
    setPassword(newPassword)
    console.log('change password')
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
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emailState={emailState}
      passwordState={passwordState}
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
