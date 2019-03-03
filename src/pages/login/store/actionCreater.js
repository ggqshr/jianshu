import { actionTypes } from ".";
import {fromJS} from 'immutable'
import axios from "axios";

export const loginAction = () => ({
  type: actionTypes.LOGIN,
})

export const logoutAction = () => ({
  type: actionTypes.LOGOUT,
})


export const login = (account,password) =>{
  return (dis)=>{
    axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
      const result = res.data.data;
      if (result){
        dis(loginAction())
      }
      else{
        alert('登录失败')
      }
    })
  }
}
