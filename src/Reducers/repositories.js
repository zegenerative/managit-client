import { ALL_REPOSITORIES } from '../Actions/actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case ALL_REPOSITORIES: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 