import auth from "../reducer/auth";
import {IGlobalState} from "../store";

const reducer = (state: IGlobalState, action: object) => ({
  auth: auth(state, action)
})

export default reducer
