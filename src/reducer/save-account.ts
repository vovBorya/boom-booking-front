import {IGlobalState} from "../store";

const saveAccount = (state: IGlobalState, action: any) => {
  switch (action.type) {
    case 'SAVE_ACCOUNT':
      return ({
        ...state,
        ...action.payload
      })
    default: return state
  }
}

export default saveAccount
