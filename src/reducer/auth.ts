import {signIn, ISignedAcc, signUp} from "../services";
import {IGlobalState, initialState} from "./global-state";

const auth = (state: IGlobalState = initialState, action: any): object => {

  switch (action.type) {
    case 'SIGN_IN':
      const { login, password } = action.payload
      return {
        ...state,
        ...signIn(login, password)
      };
    case 'SIGN_UP':
      return {
        ...state,
        ...signUp(action.payload)
      };
    case 'SIGN_OUT':
      return state;
    default: return state
  }
}

export default auth