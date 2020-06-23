import {signIn, signUp} from "../services";
import {IGlobalState} from "../store";

const auth = (state: IGlobalState, action: any): object => {

  switch (action.type) {
    case 'SIGN_IN':
      const { login, password } = action.payload
      console.log(`state: ${state.language}`)
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