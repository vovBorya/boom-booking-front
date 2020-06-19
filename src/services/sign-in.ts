interface ISignedAcc {
  token: string,
  account: {
    id: number,
    email: string,
    phone: string
  }
}

const signIn = (login: string, password: string): ISignedAcc => {

  console.log(`sign in in service. login: ${login}\n password ${password}`)

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