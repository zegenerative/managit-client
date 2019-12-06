import { ALL_REPOSITORIES } from '../Actions/actions'
import { ONE_REPOSITORY } from '../Actions/actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case ONE_REPOSITORY: {
        return action.payload
    }
    case ALL_REPOSITORIES: {
        return action.payload
    }
    default: 
        return state
  }
}

export default reducer 