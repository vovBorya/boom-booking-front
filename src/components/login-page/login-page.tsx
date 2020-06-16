import React from 'react';
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
          />
        </View>
        <View style={styles.labelAndInput}>
          <Text>пароль</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            textAlign="center"
          />
        </View>
        <View style={styles.enterLabelView}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={styles.enterLabel}>Войти</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
          <Image style={styles.image} source={require('../../resources/img/FB.png')} />
          <Image style={styles.image} source={require('../../resources/img/google.png')} />
        </View>
      </View>
      <Text style={styles.signUp}>регистрация</Text>
    </View>
  )
}

export default LoginPage