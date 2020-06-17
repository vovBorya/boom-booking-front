import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from "./login-page-styles";

type LoginPageProps = {
  //some props
}

const LoginPage: React.FC<LoginPageProps> = ({}) => {

  const [ login, setLogin ] = useState<String>('')
  const [ password, setPassword ] = useState<String>('')

  const ACTIVITY_OPACITY: number = 0.7;

  const onEnterClick = (): void => {
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
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../resources/img/logo.png')}
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
            secureTextEntry={true}
            textAlign="center"
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.enterLabelView}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={ACTIVITY_OPACITY}
            onPress={() => onEnterClick()}
          >
            <Text style={styles.enterLabel}>Войти</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity
            activeOpacity={ACTIVITY_OPACITY}
            onPress={onFBClick}
          >
            <Image style={styles.image} source={require('../../resources/img/FB.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={ACTIVITY_OPACITY}
            onPress={onGoogleClick}
          >
            <Image style={styles.image} source={require('../../resources/img/google.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={ACTIVITY_OPACITY}
        onPress={onSignUpClick}
      >
        <Text style={styles.signUp}>регистрация</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginPage