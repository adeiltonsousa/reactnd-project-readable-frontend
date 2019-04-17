export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function loadPost({categories}){
    return {
      type: LOAD_CATEGORIES,
      categories,
    }
}