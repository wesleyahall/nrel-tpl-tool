const INITIAL_STATE = {
    helloText: '',
    score: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SAY_HELLO':
            return {
                ...state,
                helloText: action.payload
            }
        default:
            return state
    }
 }