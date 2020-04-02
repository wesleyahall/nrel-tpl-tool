const INITIAL_STATE = {
    helloText: '',
    tpl_score: 0,
    overall_progress: 15
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