import { combineReducers } from 'redux'
import user from './user'
import login from './login'
import name from './name'
import repositories from './repositories'
import repository from './repository'

export default combineReducers({
    user,
    login,
    name,
    repository,
    repositories
})