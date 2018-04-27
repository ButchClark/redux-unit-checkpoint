import {ADD_COMMENT, POST_ADDED, POSTS_RETRIEVED, TOGGLE_NEW_POST} from "../actions";

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

export function posts(state = initialState, action) {
    console.log(`reducers.posts:  action.type: ${action.type}, state:`)
    console.dir(state)
    switch (action.type) {
        case POST_ADDED:
            let newPosts = [...state.postList]
            newPosts.push(action.post)
            return {
                ...state,
                postList: newPosts
            }

        case TOGGLE_NEW_POST:
            return {
                ...state,
                showNewPost: !state.showNewPost
            }

        case POSTS_RETRIEVED:
            return {
                ...state,
                postList: action.posts
            }


        default:
            return state
    }
}

export function comments(state = initialState, action) {
    console.log(`reducers.comments:  action.type: ${action.type}, state:`)
    console.dir(state)
    switch (action.type) {
        case ADD_COMMENT:
            let newComments = [...state.commentList]
            newComments.push(action.comment)
            return newComments

        default:
            return state
    }
}
