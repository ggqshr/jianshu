import { reducer as headerReducer } from '../common/header/store'
import { combineReducers } from 'redux'
//将
export default combineReducers({
    header:headerReducer,
})