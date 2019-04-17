import { combineReducers } from 'redux'

const CatReducer = combineReducers({
    dataCategories: () => ({
        categories: [
            {
                name: 'teste',
                path: 'fake'
            },
            {
                name: 'teste2',
                path: 'fake2'
            },
            {
                name: 'teste3',
                path: 'fake3'
            },
            {
                name: 'teste4',
                path: 'fake4'
            },
            {
                name: 'teste5',
                path: 'fake5'
            }
        ]
    })
})

export default CatReducer