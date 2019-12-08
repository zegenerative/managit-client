import { combineReducers } from 'redux'
import user from './user'
import login from './login'
import name from './name'
import repositories from './repositories'
import repository from './repository'
import commits from './commits'
import branches from './branches'
import searchrepo from './searchrepo'

export default combineReducers({
    user,
    login,
    name,
    repository,
    searchrepo,
    repositories,
    commits,
    branches,
})