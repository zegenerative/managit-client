import { COMMITS } from '../Actions/actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case COMMITS: {
        return action.payload
    }
    default: 
        return state
  }
}

export default reducer 