import { createStore } from "redux";
import reducer from "./reducer";

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

const store = createStore(reducer, initialState);

export default store

export {
  initialState,
  IGlobalState
}