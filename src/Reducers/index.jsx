import {combineReducers} from 'redux'
import { reducer as formReducer} from'redux-form'
import { phoneReducer} from './phoneReducer'

export default combineReducers({
	phoneReducer
})