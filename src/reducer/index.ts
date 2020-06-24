import {IGlobalState} from "../store";
import saveAccount from "./save-account";

const reducer = (state: IGlobalState, action: any) => ({
  saveAccount: saveAccount(state, action)

})

export default reducer
