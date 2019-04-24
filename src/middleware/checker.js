import { LIST_CATEGORIES } from '../action/categories'


const checker = (store) => (next) => (action) => {
    if (
        action.type === LIST_CATEGORIES
    ) {
        return alert("Categoria com nome REDUX!")
    }
    return next(action)
}

export default checker