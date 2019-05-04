import { combineReducers } from 'redux'

import categories from './categories'
import posts from './posts'
import addPost from './addPost'



export default combineReducers ({
    categories,
    posts,
    addPost
})