import React, { useState } from 'react';
import SignInScreenView from "./sign-in-screen-view";
import { connect } from "react-redux";
import * as actions from '../../../actions/auth'

type SignInScreenProps = {

}

// @ts-ignore
const SignInScreen: React.FC<SignInScreenProps> = ({ navigation, signIn }) => {

  const [ login, setLogin ] = useState<String>('')
  const [ password, setPassword ] = useState<String>('')

  const ACTIVITY_OPACITY: number = 0.7;

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
      setLogin={setLogin}
      setPassword={setPassword}
      activityOpacity={ACTIVITY_OPACITY}
      signIn={() => signIn(login, password)}
      signUp={onSignUpClick}
      facebookSingIn={onFBClick}
      googleSignIn={onGoogleClick}
    />
  )
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (login: string, password: string) => {
    dispatch(actions.signIn({login, password}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)