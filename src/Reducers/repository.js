import { ONE_REPOSITORY, SEARCH_REPOSITORY } from '../Actions/actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case ONE_REPOSITORY: {
        return action.payload
    }
    case SEARCH_REPOSITORY: {
        return action.payload
    }
    default: 
        return state
  }
}

export default reducer 