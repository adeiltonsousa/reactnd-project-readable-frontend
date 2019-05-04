import { LIST_POSTS } from '../action/posts';
import { ADD_POST } from '../action/posts'

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
        case RECEIVE_DATA:
            return action.posts
        default:
            return state
    }
}
