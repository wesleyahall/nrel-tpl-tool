import {
    SAY_HELLO,
    INCREASE_SCORE
} from './_action-types'

export const sayHello = (data) => async dispatch => {
    dispatch({
        type: SAY_HELLO, 
        payload: 'Hello World!'
    })
}

export const increaseScore = (data) => async dispatch => {
    dispatch ({
        type: INCREASE_SCORE
    })
}