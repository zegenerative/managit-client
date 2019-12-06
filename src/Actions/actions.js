import request from 'superagent'
// const url = 'http://localhost:4000'
const url = 'http://managit.netlify.com'

// AUTHENTICATION RELATED ACTIONS

export const LOGIN = 'LOGIN'

function dispatchLogin (payload) {
    return {
        type: LOGIN,
        payload
    }
}

export const login = () => dispatch => {
  request
    .get(`${url}/home`)
    .then(response => {
        const action = dispatchLogin(response.body)
        dispatch(action)
    })
    .catch(console.error)
}