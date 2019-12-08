import { ALL_REPOSITORIES, NEW_REPO, DELETE_REPO } from '../Actions/actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case ALL_REPOSITORIES: {
        return action.payload
    }
    case NEW_REPO: {
        return [ action.payload, ...state ]
    }
    case DELETE_REPO: {
        return state.filter(item => item.name !== action.payload)
    }
    default: 
        return state
  }
}

export default reducer 