import { SEARCH_REPOSITORY } from '../Actions/actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case SEARCH_REPOSITORY: {
        return action.payload
    }
    default: 
        return state
  }
}

export default reducer 