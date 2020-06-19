import {ISignedAcc} from "./sign-in";

interface ISignUpData {
  email: string
  firstName: string
  lastName: string
  password: string
  phone: string
}

const signUp = (data: ISignUpData): ISignedAcc => {

  console.log('sign up')

  return {
    token: 'token',
    account: {
      id: 1,
      email: data.email,
      phone: data.phone
    }
  }
}

export {
  signUp,
  ISignUpData
}