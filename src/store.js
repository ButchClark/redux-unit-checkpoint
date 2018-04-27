import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import * as reducers from './reducers'
import logger from 'redux-logger'

const initialState = {
    posts: {
        postList: [],
        showNewPost: false
    },
    comments: {
        commentList: [],
        showComments: true
    }
}

const store = createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            logger
        )
    )
)

export default store
