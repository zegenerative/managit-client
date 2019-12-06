import request from 'superagent'
// const url = 'http://localhost:4000'
const url = 'http://managit-server.herokuapp.com'
const gitUrl = 'https://api.github.com'

export const ONE_REPOSITORY = 'ONE_REPOSITORY'
export const ALL_REPOSITORIES = 'ALL_REPOSITORIES'
export const NAME = 'NAME'

const oneRepository = repository => ({
    type: ONE_REPOSITORY,
    payload: repository
})

const allRepositories = repositories => ({
    type: ALL_REPOSITORIES,
    payload: repositories
})

const searchedName = name => ({
    type: NAME,
    payload: name
})

export const searchRepository = (owner, name) => (dispatch, getState) => {
    const state = getState()
    const { repositories } = state

    const searchName = name.name
    if (!repositories.length) {
        request(`${gitUrl}/repos/${owner}/${searchName}`)
            .then(response => {
                const allRepos = oneRepository(response.body)
                const nameSearch = searchedName(name)
                dispatch(allRepos)
                dispatch(nameSearch)
            })
            .catch(console.error)
    }
}

export const allRepos = (owner) => (dispatch, getState) => {
    const state = getState()
    const { repositories } = state

    if (!repositories.length) {
      request(`${gitUrl}/users/${owner}/repos`)
      .then(response => {
          console.log('response of /users/user/repos', response.body)
        const repositories = allRepositories(response.body)
        dispatch(repositories)
      })
      .catch(console.error)
    }
}
