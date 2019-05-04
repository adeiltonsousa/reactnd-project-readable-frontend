import { ADD_POST } from '../action/posts'

import {
    RECEIVE_DATA
  } from '../action/index'

export default function addPost(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return state.concat([action.posts])
            //return Object.assign([...state], {[Object.keys(state).length]: action.addNewPost})
        case RECEIVE_DATA:
            return action.posts
        default:
            return state
    }
}
