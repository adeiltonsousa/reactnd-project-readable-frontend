import {
    ADD_POST,
    LIST_POSTS,
    UP_VOTE_POST,
    DOWN_VOTE_POST
} from '../action/posts'

import {
    RECEIVE_DATA
} from '../action'


const initialState = {
    loaded: false,
    data: []
}

export default function posts(state = initialState, action) {

    // const { id } = action

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
        // case UP_VOTE_POST:
        //     let postupvote = state.map(p => {
        //         if (p.id === id) {
        //             return {
        //                 ...p,
        //                 voteScore: p.voteScore + 1
        //             };
        //         }
        //         return p;
        //     });
        //     return postupvote;
        // case DOWN_VOTE_POST:
        //     let postdownvote = state.map(p => {
        //         if (p.id === id) {
        //             return {
        //                 ...p,
        //                 voteScore: p.voteScore - 1
        //             };
        //         }
        //         return p;
        //     });
        //     return postdownvote;
        case RECEIVE_DATA:
            return action.posts
        default:
            return state
    }
}
