import {styles} from "./sign-in-screen-styles";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
// @ts-ignore
import translate from '../../../utils/i18n.js'
import TextInputWithLabel from "../../small-components/text-input-with-label";
import {BigLogo} from "../../small-components/big-logo/big-logo";
import {InputState} from "../../../utils/enums/enums";
import {useLazyQuery} from "@apollo/react-hooks";
import {SIGN_IN} from "../../../constants/queries/sign-in";

type SignInScreenViewProps = {
  onChangeEmail: (newString: string) => void
  onChangePassword: (newString: string) => void
  emailState: InputState
  passwordState: InputState
  activityOpacity: number
  signIn: () => void
  signUp: () => void
  facebookSingIn: () => void
  googleSignIn: () => void
}

const SignInScreenView: React.FC<SignInScreenViewProps> =
  ({
     onChangeEmail,
     onChangePassword,
     emailState,
     passwordState,
     activityOpacity,
     facebookSingIn,
     googleSignIn,
     signIn,
     signUp,
  }) => {

  const emailDescription: string = 'Неверный формат почты';
  const passwordDescription: string = 'Неверный формат пароля. \n' +
    'Пароль должен содержать буквы латинского алфавита разных регистров\n,' +
    'цифры, и спецсимволы !@#$%^&*';


  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <BigLogo />
          <TextInputWithLabel
            label={translate('common.email')}
            setText={onChangeEmail}
            hideText={false}
            inputState={emailState}
            description={emailDescription}
          />
          <TextInputWithLabel
            label={translate('common.password')}
            setText={onChangePassword}
            hideText={true}
            inputState={passwordState}
            description={passwordDescription}
          />
          <View style={styles.enterLabelView}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={activityOpacity}
              onPress={signIn}
            >
              <Text style={styles.enterLabel}>{translate('actions.signIn')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity activeOpacity={activityOpacity} onPress={facebookSingIn}>
              <Image style={styles.image} source={require(`../../../resources/img/FB.png`)} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={activityOpacity} onPress={googleSignIn} >
              <Image style={styles.image} source={require('../../../resources/img/google.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewContainer}>
          <TouchableOpacity activeOpacity={activityOpacity} onPress={signUp}>
            <Text style={styles.signUp}>{translate('actions.signUp')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignInScreenView