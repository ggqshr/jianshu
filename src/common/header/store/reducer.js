import * as  actionTypes from "./actionTypes";
import { fromJS } from 'immutable'
const initialState = fromJS({
    focused: false,
    list:[],
})


export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.HANDLEFOCUS:
            {
                return state.set('focused',true)
            }

        case actionTypes.HANDLEBLUR:
            {
                return state.set('focused',false)
            }
        case actionTypes.GET_LIST:{
            return state.set('list',payload);
        }
        default:
            return state
    }
}