import {
    ADD_POST,
    LIST_POSTS,
    VOTE_POST
} from '../action/posts'


import {
    RECEIVE_DATA
} from '../action'


const initialState = {
    loaded: false,
    data: []
}

export default function posts(state = initialState, action) {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                loaded: true,
                data: [...state.data, action.payload],
            }
        case LIST_POSTS:
            return {
                ...state,
                loaded: true,
                data: action.payload,
            }
        case VOTE_POST:
            return {
                loaded: true,
                data: state.data.map(postObj => {
                    let newPostObj = Object.assign({}, postObj)
                    if (newPostObj.id === action.postId) {
                        if (action.voteType === 'upVote') {
                            newPostObj.voteScore++
                        }
                        if (action.voteType === 'downVote') {
                            newPostObj.voteScore--
                        }
                    }
                    return newPostObj
                })
            }
        case RECEIVE_DATA:
            return action.posts
        default:
            return state
    }
}
