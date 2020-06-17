import React, { useState } from 'react';
import SignInPageView from "./sign-in-page-view";

type SignInPageProps = {}

const SignInPage: React.FC<SignInPageProps> = ({}) => {

  const [ login, setLogin ] = useState<String>('')
  const [ password, setPassword ] = useState<String>('')

  const ACTIVITY_OPACITY: number = 0.7;

  const onSignInClick = (): void => {
    console.log(`login: ${login}\n password: ${password}`)
  }

  const onSignUpClick = (): void => {
    console.log('sign up')
  }

  const onFBClick = (): void => {
    console.log('fb')
  }

  const onGoogleClick = (): void => {
    console.log('google')
  }

  return (
    <SignInPageView
      setLogin={setLogin}
      setPassword={setPassword}
      activityOpacity={ACTIVITY_OPACITY}
      signIn={onSignInClick}
      signUp={onSignUpClick}
      facebookSingIn={onFBClick}
      googleSignIn={onGoogleClick}
    />
  )
}

export default SignInPage