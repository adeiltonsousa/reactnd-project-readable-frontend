import * as PostsAPI from '../PostsAPI'

export const LIST_POSTS = 'LIST_POSTS'
export const ADD_POST = 'ADD_POST'
export const ADD_TODO = 'ADD_TODO'


function addPost(post) {
    return {
        type: ADD_POST,
        
    }
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        return PostsAPI.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo))
                cb()
            })
            .catch(() => {
                alert('There was an error. Try again.')
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