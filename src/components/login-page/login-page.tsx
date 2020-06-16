import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Logo from '../../resources/img/logo.svg'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 60,
    marginBottom: 30,
    width: 350,
    height: 150
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#e18c44',
    marginTop: 7
  },
  labelAndInput: {
    alignItems: "center",
    margin: 7
  },
  button: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e18c44",
    borderRadius: 25,
    height: 45,
    width: 250
  },
  enterLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  enterLabelView: {
    justifyContent: "center",
    alignItems: "center"
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 7
  },
  image: {
    height: 50,
    width: 50
  },
  signUp: {
    marginTop: 15
  }
})

export default LoginPage