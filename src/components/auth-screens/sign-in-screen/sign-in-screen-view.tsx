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
import OrangeButton from "../../small-components/orange-button";
import { values } from "../../../constants/values";

type SignInScreenViewProps = {
  onChangeEmail: (newString: string) => void
  onChangePassword: (newString: string) => void
  emailState: InputState
  passwordState: InputState
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
     facebookSingIn,
     googleSignIn,
     signIn,
     signUp,
  }) => {

  const emailDescription: string = 'Неверный формат почты';
  const passwordDescription: string = 'Неверный формат пароля. \n' +
    'Пароль должен содержать буквы латинского алфавита разных регистров\n,' +
    'цифры, и спецсимволы !@#$%^&*';

  const { TOUCHABLE_ACTIVITY_OPACITY } = values;

  return(
    <View style={styles.scrollContainer}>
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
          <OrangeButton label={translate('actions.signIn')} onClick={signIn} />
          <View style={styles.icons}>
            <TouchableOpacity activeOpacity={TOUCHABLE_ACTIVITY_OPACITY} onPress={facebookSingIn}>
              <Image style={styles.icon} source={require(`../../../resources/img/icons/FB.png`)} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={TOUCHABLE_ACTIVITY_OPACITY} onPress={googleSignIn} >
              <Image style={styles.icon} source={require('../../../resources/img/icons/google.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewContainer}>
          <TouchableOpacity activeOpacity={TOUCHABLE_ACTIVITY_OPACITY} onPress={signUp}>
            <Text style={styles.signUp}>{translate('actions.signUp')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignInScreenView