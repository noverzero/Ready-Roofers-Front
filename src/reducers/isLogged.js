const isLoggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN-IN':
            return !state
        default:
            console.log(`no reducer case set up for action.type: ${action.type}`)
            return state
    }
}
export default isLoggedReducer