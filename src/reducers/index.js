import { combineReducers } from 'redux'

import categories from './categories'
import posts from './posts'
// import reduPost from './addPost'



export default combineReducers ({
    categories,
    posts
})