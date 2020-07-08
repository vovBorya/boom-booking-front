type AccountType = {
  token: string,
  account: {
    id: string,
    email: string,
    phone: string
  }
}

const saveAccount = (account: AccountType) => ({
  type: 'SAVE_ACCOUNT',
  payload: account
})

const googleSignIn = (token: string) => ({
  type: "SIGN_IN",
  payload: token
});

export {
  saveAccount,
  AccountType
};