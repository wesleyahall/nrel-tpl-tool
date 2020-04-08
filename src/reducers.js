const INITIAL_STATE = {
    helloText: '',
    tpl_score: 7,
    overall_progress: 50,
    top_level_scores: 
    [{
        title: 'Cost of Energy', 
        score: 3
    }]
    
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SAY_HELLO':
            return {
                ...state,
                helloText: action.payload
            }
        case 'INCREASE_SCORE':
            return {
                ...state,
                tpl_score: state.tpl_score + 1,
                overall_progress: state.overall_progress + 5
            }
        default:
            return state
    }
 }