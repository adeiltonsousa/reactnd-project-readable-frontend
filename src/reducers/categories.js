import {
    LIST_CATEGORIES
} from '../action/categories'


export default function (state = [], action) {
    switch (action.type) {
        case LIST_CATEGORIES:
            return state.concat([action.categorie])
        default:
            return state
    }
}