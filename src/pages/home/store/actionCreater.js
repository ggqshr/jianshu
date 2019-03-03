import { actionTypes } from ".";
import axios from "axios";
import {  fromJS } from "immutable";
const getHomeDataAction = (payload) => ({
  type: actionTypes.GET_HOME_DATA,
  payload
})

const getMoreAction = (payload,page) => ({
  type: actionTypes.GET_MORE,
  payload:fromJS(payload),
  page
})


export const  getHomeData = ()=>{
    return (dis)=>{
        axios.get("/api/home.json").then((res)=>{
            console.log(res.data.artList)
            dis(getHomeDataAction(res.data))
        })
    }
}

export const getMore = (page)=>{
    return (dis)=>{
        axios.get("/api/homeList.json?page="+page).then((res)=>{
            dis(getMoreAction(res.data.data,page+1))
        })
    }
}