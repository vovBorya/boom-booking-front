interface IGlobalState {
  language: string,
  token: string,
  account: {
    id: string,
    email: string,
    phone: string
  }
}

const  initialState: IGlobalState = {
  language: '',
  token: '',
  account: {
    id: '0',
    email: '',
    phone: ''
  }
}

export {
  initialState,
  IGlobalState
}