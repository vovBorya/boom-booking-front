import {ISignUpData} from "../services";

interface ILoginAndPassword {
  login: string,
  password: string
}

const signIn = ({ login, password } : ILoginAndPassword) => ({
  type: 'SIGN_IN',
  payload: {
    login,
    password
  }
})

const signUp = (data: ISignUpData) => ({
  type: 'SIGN_UP',
  payload: {
    ...data
  }
})

export {
  signIn,
  signUp
}