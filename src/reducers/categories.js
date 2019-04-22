import { LIST_CATEGORIES } from '../action/categories'

const initialState = {
  loaded: false,
  data: []
}

export default function categories(state = initialState, action) {
   switch (action.type) {
       case LIST_CATEGORIES:
           return {
               ...state,
               loaded: true,
               data: action.payload, 
          }
       default:
           return state
   }
}