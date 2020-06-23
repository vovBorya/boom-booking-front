import {styles} from "./sign-in-screen-styles";
import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
// @ts-ignore
import translate from '../../../utils/i18n.js'
import TextInputWithLabel from "../../small-components/text-input-with-label";

type SignInScreenViewProps = {
  setLogin: (newString: string) => void
  setPassword: (newString: string) => void
  activityOpacity: number
  signIn: () => void
  signUp: () => void
  facebookSingIn: () => void
  googleSignIn: () => void
}

const SignInScreenView: React.FC<SignInScreenViewProps> = ({
                                                         setLogin,
                                                         setPassword,
                                                         activityOpacity,
                                                         facebookSingIn,
                                                         googleSignIn,
                                                         signIn,
                                                         signUp,
                                                       }) => {

  return(
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../resources/img/logo.png')}
        fadeDuration={500}
      />
      <View>
        <TextInputWithLabel
          label={translate('common.login')}
          setText={setLogin}
          hideText={false}
        />
        <TextInputWithLabel
          label={translate('common.password')}
          setText={setPassword}
          hideText={true}
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
      <TouchableOpacity activeOpacity={activityOpacity} onPress={signUp}>
        <Text style={styles.signUp}>{translate('actions.signUp')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreenView