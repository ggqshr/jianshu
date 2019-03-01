import * as actionTypes from "./actionTypes";
import axios from "axios";

export const handleFocusAction = () => ({
  type: actionTypes.HANDLEFOCUS,
})

export const handleBlurAction = () => ({
  type: actionTypes.HANDLEBLUR,
})

export const getListAction = (payload) => ({
  type: actionTypes.GET_LIST,
  payload
})

export const getList = () => {
  return (dis) => {

    axios.get()
  }
}
