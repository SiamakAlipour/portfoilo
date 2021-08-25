import { combineReducers } from 'redux'
import slideReducer from './slideReducer'

let allReducers = combineReducers({
	slide: slideReducer,
})

export default allReducers
