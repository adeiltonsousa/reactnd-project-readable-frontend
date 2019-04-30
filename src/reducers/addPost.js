import { ADD_POST } from '../action'

const initialState = {
    data: []
}

export default function addPost(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return Object.assign([...state], {[Object.keys(state).length]: action.addNewPost})
        default:
            return state
    }
}
