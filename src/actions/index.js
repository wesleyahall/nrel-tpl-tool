import {
    SAY_HELLO
} from './_action-types'

export const sayHello = (data) => async dispatch => {
    dispatch({
        type: SAY_HELLO, 
        payload: 'Hello World!'
    })
}