import auth from "../reducer/auth";

const reducer = (state: object, action: object) => ({
  auth: auth(state, action)
})

export default reducer
