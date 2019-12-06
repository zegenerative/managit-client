import { combineReducers } from 'redux'
import user from './user'
import login from './login'
import name from './name'
import repositories from './repositories'

export default combineReducers({
    user,
    login,
    name,
    repositories
})