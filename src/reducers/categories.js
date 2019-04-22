import {
    LIST_CATEGORIES
} from '../action/categories'


export default function categories(state = [], action) {
    switch (action.type) {
        case LIST_CATEGORIES:
            return state.map((cat) => cat.id !== action.id ? cat :
            Object.assign({}, cat, { complete: !cat.complete }))
        default:
            return state
    }
}