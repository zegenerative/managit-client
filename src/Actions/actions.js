import request from 'superagent'
const gitUrl = 'https://api.github.com'

export const ONE_REPOSITORY = 'ONE_REPOSITORY'
export const ALL_REPOSITORIES = 'ALL_REPOSITORIES'
export const NAME = 'NAME'
export const COMMITS = 'COMMITS'
export const BRANCHES = 'BRANCHES'

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

const branches = branches => ({
    type: BRANCHES,
    payload: branches
})

export const searchRepository = (owner, name) => (dispatch) => {
    request(`${gitUrl}/repos/${owner}/${name}`)
        .then(response => {
            console.log(response.body)
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

export const searchBranches = (owner, name) => (dispatch) => {
    request(`${gitUrl}/repos/${owner}/${name}/branches`)
        .then(response => {
            const allBranches = branches(response.body)
            dispatch(allBranches)
        })
    .catch(console.error)
}