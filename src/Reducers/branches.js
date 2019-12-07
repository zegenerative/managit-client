import { BRANCHES } from '../Actions/actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case BRANCHES: {
        return action.payload
    }
    default: 
        return state
  }
}

export default reducer 