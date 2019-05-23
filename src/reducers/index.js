import { combineReducers } from 'redux'

import {
    RECEIVE_DATA,
    LIST_CATEGORIES,
    LIST_POSTS,
    ADD_POST,
    VOTE_POST,
    SINGLE_POST
} from '../action'


const initialState = {
    loaded: false,
    data: []
}

function categories(state = initialState, action) {
    switch (action.type) {
        case LIST_CATEGORIES:
            return {
                ...state,
                loaded: true,
                data: action.payload,
            }
        default:
            return state
    }
}

function posts(state = initialState, action) {

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
        case SINGLE_POST:
            return {
                ...state,
                loaded: true,
                data: action.payload,
            }
        case VOTE_POST:
            return {
                loaded: true,
                data: state.data.map(postObj => {
                    let newVotePost = Object.assign({}, postObj)
                    if (newVotePost.id === action.postId) {
                        if (action.voteType === 'upVote') {
                            newVotePost.voteScore++
                        }
                        if (action.voteType === 'downVote') {
                            newVotePost.voteScore--
                        }
                    }
                    return newVotePost
                })
            }
        case RECEIVE_DATA:
            return action.posts
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
})