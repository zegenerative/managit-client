import { NAME } from '../Actions/actions'

const reducer = (state = "", action) => {
  switch(action.type) {
    case NAME: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 