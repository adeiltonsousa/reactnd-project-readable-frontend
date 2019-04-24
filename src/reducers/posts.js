import { LIST_POSTS } from '../action/posts';

const initialState = {
    loaded: false,
    data: []
}

export default function posts(state = initialState, action) {
   switch (action.type) {
       case LIST_POSTS:
           return {
               ...state,
               loaded: true,
               data: action.payload, 
          }
       default:
           return state
   }
}