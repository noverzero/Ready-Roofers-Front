const counterReducer = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + action.payLoad
        case 'DECREMENT':
            return state - 1
        default:
            console.log(`no reducer case set up for action.type: ${action.type}`)
        return state

    }
}
 
export default counterReducer