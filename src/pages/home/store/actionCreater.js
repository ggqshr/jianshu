import { actionTypes } from ".";
import axios from "axios";

const getHomeDataAction = (payload) => ({
  type: actionTypes.GET_HOME_DATA,
  payload
})



export const  getHomeData = ()=>{
    return (dis)=>{
        axios.get("/api/home.json").then((res)=>{
            console.log(res.data.artList)
            dis(getHomeDataAction(res.data))
        })
    }
}