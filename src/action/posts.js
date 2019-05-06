import * as PostsAPI from '../PostsAPI'

export const LIST_POSTS = 'LIST_POSTS'
export const ADD_POST = 'ADD_POST'
// export const UP_VOTE_POST = "UP_VOTE_POST"
// export const DOWN_VOTE_POST = "DOWN_VOTE_POST";


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

// function downVotePost(id) {
//     return {
//         type: DOWN_VOTE_POST,
//         id
//     };
// }


// function upVotePost(id) {
//     return {
//         type: UP_VOTE_POST,
//         id
//     };
// }

// export const updateVote = (id, vote) => dispatch => {
//     PostsAPI.updateVotePost(id, vote)
//     if(vote === "upVote") {
//         dispatch(upVotePost(id))
//     } else {
//         dispatch(downVotePost(id))
//     }
// }

// export function downVote() {
//     return {
//         type: DOWN_VOTE
//     }
// }