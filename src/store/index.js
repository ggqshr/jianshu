import  reduce  from './reducer'
import { createStore } from 'redux'

const store = createStore(reduce)

export default store