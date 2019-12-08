import request from 'superagent'
const gitUrl = 'https://api.github.com'

export const ONE_REPOSITORY = 'ONE_REPOSITORY'
export const SEARCH_REPOSITORY = 'SEARCH_REPOSITORY'
export const ALL_REPOSITORIES = 'ALL_REPOSITORIES'
export const NAME = 'NAME'
export const COMMITS = 'COMMITS'
export const BRANCHES = 'BRANCHES'
export const NEW_REPO = 'NEW_REPO'
export const DELETE_REPO = 'DELETE_REPO'

const oneRepository = repository => ({
    type: ONE_REPOSITORY,
    payload: repository
})

const searchRepo = repository => ({
    type: SEARCH_REPOSITORY,
    payload: repository
})

const deleteRepository = repository => ({
    type: DELETE_REPO,
    payload: repository
})

const allRepositories = repositories => ({
    type: ALL_REPOSITORIES,
    payload: repositories
})

const createRepository = repository => ({
    type: NEW_REPO,
    payload: repository
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
            const searchedRepo = searchRepo(response.body)
            dispatch(searchedRepo)
        })
    .catch(console.error)
}

export const oneRepo = (owner, name) => (dispatch) => {
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

export const searchBranches = (owner, name) => (dispatch) => {
    request(`${gitUrl}/repos/${owner}/${name}/branches`)
        .then(response => {
            const allBranches = branches(response.body)
            dispatch(allBranches)
        })
    .catch(console.error)
}

export const createRepo = (repo) => (dispatch, getState) => {
    const state = getState()
    const { login } = state
    const token = login

    request
        .post(`${gitUrl}/user/repos`)   
        .set('Authorization', `token ${token}`) 
        .set('Content-Type', 'application/json')
        .send(repo)
        .then(response => {
            const newRepo = createRepository(response.body)
            dispatch(newRepo)
        })
    .catch(console.error)
}

export const deleteRepo = (repo) => (dispatch, getState) => {
    const state = getState()
    const { user, login } = state
    const token = login

    request
        .delete(`${gitUrl}/repos/${user}/${repo.name}`)
        .set('Authorization', `token ${token}`) 
        .then(response => {
            console.log(response.status, 'repo deleted')
            const deletedRepo = deleteRepository(repo.name)
            dispatch(deletedRepo)
        })
    .catch(console.error)
}