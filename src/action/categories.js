export const LIST_CATEGORIES = 'LIST_CATEGORIES'

export default function listCategories(categories) {  
    return {
        type: LIST_CATEGORIES,
        payload: categories
    }
}