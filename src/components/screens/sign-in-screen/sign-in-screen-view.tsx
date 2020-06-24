import {styles} from "./sign-in-screen-styles";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
// @ts-ignore
import translate from '../../../utils/i18n.js'
import TextInputWithLabel from "../../small-components/text-input-with-label";
import {BigLogo} from "../../small-components/big-logo/big-logo";

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
      <ScrollView>
        <View style={styles.viewContainer}>
          <BigLogo />
          <TextInputWithLabel
            label={translate('common.email')}
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