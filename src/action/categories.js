import * as PostsAPI from '../PostsAPI'

export const LIST_CATEGORIES = 'LIST_CATEGORIES'


//FUNÇÃO CRIADORA DE AÇÃO
function listCategories(categorie) {
    return {
        type: LIST_CATEGORIES,
        categorie,
    }
}

export function handleListCategories(categorie) {
    return (dispatch) => {
        return PostsAPI.listCategories(categorie)
            .then((categories) => 
                this.setState({ categories: categories}))
    }
}


