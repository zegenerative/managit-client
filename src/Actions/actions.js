import request from 'superagent'
// const url = 'http://localhost:4000'
const gitUrl = 'https://api.github.com'

export const ONE_REPOSITORY = 'ONE_REPOSITORY'
export const ALL_REPOSITORIES = 'ALL_REPOSITORIES'
export const NAME = 'NAME'
export const COMMITS = 'COMMITS'

const oneRepository = repository => ({
    type: ONE_REPOSITORY,
    payload: repository
})

const allRepositories = repositories => ({
    type: ALL_REPOSITORIES,
    payload: repositories
})

const commits = commits => ({
    type: COMMITS,
    payload: commits
})

export const searchRepository = (owner, name) => (dispatch) => {
    request(`${gitUrl}/repos/${owner}/${name}`)
        .then(response => {
            const oneRepo = oneRepository(response.body)
            dispatch(oneRepo)
        })
    .catch(console.error)
}

export const allRepos = (owner) => (dispatch, getState) => {
    const state = getState()
    const { repositories } = state

    if (!repositories.length) {
        request(`${gitUrl}/users/${owner}/repos`)
            .then(response => {
                const repositories = allRepositories(response.body)
                dispatch(repositories)
        })
        .catch(console.error)
    }
}

export const searchCommits = (owner, name) => (dispatch) => {
    request(`${gitUrl}/repos/${owner}/${name}/commits`)
        .then(response => {
            const allCommits = commits(response.body)
            dispatch(allCommits)
        })
    .catch(console.error)
}