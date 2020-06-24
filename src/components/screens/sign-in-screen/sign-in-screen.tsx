import React, { useState } from 'react';
import SignInScreenView from "./sign-in-screen-view";
import { connect } from "react-redux";
import * as actions from '../../../actions/auth'
import {useQuery} from "@apollo/react-hooks";
import {SIGN_IN} from "../../../constants/queries/sign-in";
import SpinnerScreen from "../spinner-screen";

type SignInScreenProps = {

}

// @ts-ignore
const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const ACTIVITY_OPACITY: number = 0.7;

  const onSignInClick = (email: string, password: string): void => {
    const { loading, error, data } = useQuery(SIGN_IN, {
      variables: { email, password }
    })

    if (!loading )

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
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)

/*
export default SignInScreen*/
