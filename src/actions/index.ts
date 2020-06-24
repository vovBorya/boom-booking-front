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


export {
  saveAccount,
  AccountType
};