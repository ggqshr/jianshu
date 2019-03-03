import { fromJS } from "immutable";
import { actionTypes } from ".";



const initialState = fromJS({
  login: false,
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN:{
      return state.set('login',true);
    }
    case actionTypes.LOGOUT:{
      return state.set('login',false);
    }
    default:
      return state
  }
}
