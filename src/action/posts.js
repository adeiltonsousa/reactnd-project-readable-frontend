import * as PostsAPI from '../PostsAPI'

export const LIST_POSTS = 'LIST_POSTS'
export const ADD_POST = 'ADD_POST'
export const ADD_TODO = 'ADD_TODO'


function addPost(post) {
    return {
        type: ADD_POST,
        
    }
}

export function addPosts(name, cb) {
    return (dispatch) => {
        return PostsAPI.handleAddPost(name)
            .then((post) => {
                dispatch(addTodo(post))
                cb()
            })
            .catch(() => {
                alert('Erro')
            })
    }
}

export function listPosts(posts) {  
    return {
        type: LIST_POSTS,
        payload: posts
    }
}

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}
