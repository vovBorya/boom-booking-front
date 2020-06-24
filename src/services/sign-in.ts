interface ISignedAcc {
  token: string,
  account: {
    id: number,
    email: string,
    phone: string
  }
}

const signIn = (email: string, password: string): ISignedAcc => {

  console.log(`sign in in service. login: ${email}\n password ${password}`)

  //какой-то запрос бла бла бла

  return {
    token: 'token',
    account: {
      id: 1,
      email: 'sss',
      phone: 'sss'
    }
  }
}

export {
  signIn,
  ISignedAcc
};