import * as  actionTypes from "./actionTypes";
import { fromJS } from 'immutable'
const initialState = fromJS({
    focused: false,
    list:[],
    page:1,
    totalPage:1,
    mouseIn:false,
})


export default (state = initialState, { type, payload,totalPage }) => {
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
            return state.set('list',payload)
            .set('totalPage',totalPage)
        }
        case actionTypes.MOUSE_ENTER:{
            return state.set('mouseIn',true)
        }
        case actionTypes.MOUSE_LEAVE:{
            return state.set('mouseIn',false)
        }
        case actionTypes.CHANGE_LIST:{
            const nextPage = (state.get('page')+1)%(state.get('totalPage')+1);
            return state.set('page',nextPage===0?1:nextPage)
        }
        default:
            return state
    }
}