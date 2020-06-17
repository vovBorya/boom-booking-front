import styles from "./login-page-styles";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";

type SignInPageViewProps = {
  setLogin: (newString: string) => void
  setPassword: (newString: string) => void
  activityOpacity: number
  signIn: () => void
  signUp: () => void
  facebookSingIn: () => void
  googleSignIn: () => void
}

const SignInPageView: React.FC<SignInPageViewProps> = ({
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
        <View style={styles.labelAndInput}>
          <Text>логин</Text>
          <TextInput
            style={styles.input}
            textAlign="center"
            onChangeText={setLogin}
          />
        </View>
        <View style={styles.labelAndInput}>
          <Text>пароль</Text>
          <TextInput
            style={styles.input}
            textAlign="center"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.enterLabelView}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={activityOpacity}
            onPress={signIn}
          >
            <Text style={styles.enterLabel}>Войти</Text>
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
        <Text style={styles.signUp}>регистрация</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInPageView

