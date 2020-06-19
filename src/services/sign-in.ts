type SignInType = {
  token: string,
  account: {
    id: number,
    email: string,
    phone: string
  }
}

const signIn = (login: string, password: string): SignInType => {


  return {
    token: 'token',
    account: {
      id: 1,
      email: 'sss',
      phone: 'sss'
    }
  }
}

export default signIn;