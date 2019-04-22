import * as PostsAPI from '../PostsAPI'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(categories) {
    return {
        type: RECEIVE_DATA,
        categories
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([
            PostsAPI.getServerCategories()
        ]).then(([categories]) => {
            dispatch(receiveData(categories))
            console.log(categories)
        })
    }
}