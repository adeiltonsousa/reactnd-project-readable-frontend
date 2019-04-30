import { LIST_CATEGORIES } from '../action/categorias'


const checker = (store) => (next) => (action) => {
    if (
        action.type === LIST_CATEGORIES
    ) {
        return next(action)
    }
    return next(action)
}

export default checker