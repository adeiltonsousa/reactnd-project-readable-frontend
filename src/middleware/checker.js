import { LIST_CATEGORIES } from '../action/categorias'
import { ADD_POST } from '../action/posts'


const checker = (store) => (next) => (action) => {
    if (
        action.type === LIST_CATEGORIES
    ) {
        return next(action)
    }
    if (
        action.type === ADD_POST
    ) {
        return alert("passouno middleware")
    }
     return next(action)
}
export default checker