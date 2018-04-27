export const POST_ADDED = 'POST_ADDED'
export const ADD_COMMENT = 'ADD_COMMENT'
export const TOGGLE_NEW_POST = 'TOGGLE_NEW_POST'
export const POSTS_RETRIEVED = 'POSTS_RETRIEVED'

export function getPosts() {
    console.log("> actions.getMessages()")
    return async (dispatch) => {
        try {
            const resp = await fetch('/posts')
            await console.log('after fetch(/api/posts)')
            const json = await resp.json()
            // This becomes the "action" object in the reducer
            await console.log(`Got back posts: ${json}`)
            await console.dir(json)
            dispatch({
                    type: POSTS_RETRIEVED,
                    posts: json
                }
            )
        } catch (err) {
            console.log(`!!! fetch(/api/posts) error: ${JSON.stringify(err)}`)
        }
    }
}

export function addPost(post) {
    console.log('actions.addPost(post)...')
    return async (dispatch) => {
        try {
            console.log('actions.addPost(post) - just before fetch(POST) call')
            const response = await fetch(`/posts`, {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
            await console.log(`response from POST call: ${JSON.stringify(response)}`)
            dispatch({
                type: POST_ADDED,
                post: post
            })
        } catch (err) {
            console.log(`!!! addPost.fetch() error: ${JSON.stringify(err)}`)
        }

    }
}

export function toggleNewPost() {
    return async (dispatch) => {
        dispatch({
            type: TOGGLE_NEW_POST
        })
    }
}

export function addComment(comment) {
    return async (dispatch) => {
        // do a fetch(POST) to add the comment

        dispatch({
            type: ADD_COMMENT,
            comment: comment
        })
    }
}
