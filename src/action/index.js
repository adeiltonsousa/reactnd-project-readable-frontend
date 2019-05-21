import * as PostsAPI from '../PostsAPI'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const LIST_CATEGORIES = 'LIST_CATEGORIES'
export const LIST_POSTS = 'LIST_POSTS'
export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTEFORPOST'
export const SINGLE_POST = 'SINGLE_POST'


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

export function listCategories(categories) {  
    return {
        type: LIST_CATEGORIES,
        payload: categories
    }
}

function receiveData(posts, categorias) {
    return {
        type: RECEIVE_DATA,
        posts,
        categorias,
    }
}

export const sendPost = (post) => {
    return dispath => {
          return PostsAPI.sendpost(post).then( result => {
               dispath({type: 'ADD_POST', payload: result});
               return result;
          });
    }
}

export function listPosts(posts) {  
    return {
        type: LIST_POSTS,
        payload: posts
    }
}

export function voteForPost(postId, voteType) {
    return {
        type: VOTE_POST,
        postId,
        voteType,
    }
}

export function votePost(postId, voteType){
  return function(dispatch){
    return PostsAPI.votePost(postId, voteType).then(dispatch(voteForPost(postId, voteType)))
  }
}