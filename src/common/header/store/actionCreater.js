import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fromJS } from 'immutable'
export const handleFocusAction = () => ({
  type: actionTypes.HANDLEFOCUS,
})

export const handleBlurAction = () => ({
  type: actionTypes.HANDLEBLUR,
})

export const handleMouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
})

export const handleMouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE,
})

export const handleSwitchAction = () => ({
  type: actionTypes.CHANGE_LIST,
})


export const getListAction = (payload) => ({
  type: actionTypes.GET_LIST,
  payload:fromJS(payload),
  totalPage:Math.ceil(payload.length/2)
})

export const getList = () => {
  return (dis) => {
    axios.defaults.withCredentials = true
    axios.get('/api/list.json').then((res)=>{
      dis(getListAction(res.data.data))
    }).catch(()=>{
      console.log("error")
    })
  }
}
