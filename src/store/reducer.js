import headerReducer from '../common/header/store/reducer'
import { combineReducers } from 'redux'
//将
export default combineReducers({
    header:headerReducer,
})