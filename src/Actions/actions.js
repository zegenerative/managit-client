import request from 'superagent'
// const url = 'http://localhost:4000'
const url = 'http://managit-server.herokuapp.com'
const gitUrl = 'https://api.github.com'

export const ALL_REPOSITORIES = 'ALL_REPOSITORIES'
export const NAME = 'NAME'

const allRepositories = repositories => ({
  type: ALL_REPOSITORIES,
  payload: repositories
})

const name = name => ({
  type: NAME,
  payload: name
})

export const loadRepositories = (name) => (dispatch, getState) => {
  const state = getState()
  const { repositories } = state

  if (!repositories.length) {
    request(`${gitUrl}/search/repositories?q=${name}`)
    .then(response => {
      const allRepos = allRepositories(response.body)
      const nameSearch = name(name)
      dispatch(allRepos)
      dispatch(nameSearch)
    })
    .catch(console.error)
  }
}