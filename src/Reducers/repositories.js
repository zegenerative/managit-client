import { ALL_REPOSITORIES, NEW_REPO } from '../Actions/actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case ALL_REPOSITORIES: {
        return action.payload
    }
    case NEW_REPO: {
        return [ ...state, action.payload ]
    }
    default: 
        return state
  }
}

export default reducer 