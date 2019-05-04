import * as PostsAPI from '../PostsAPI'

export const RECEIVE_DATA = 'RECEIVE_DATA'


function receiveData(posts, categorias) {
    return {
        type: RECEIVE_DATA,
        posts,
        categorias
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([
            PostsAPI.getPosts(),
            PostsAPI.getCategories()
        ]).then(([posts, categorias]) => {
            dispatch(receiveData(posts, categorias))
        })
    }
}