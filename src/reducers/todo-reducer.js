export function todoReducer(state=[], action) {
    switch (action.type) {
        case ("insert"):
            return [...state, {...action.payload}]
        case ("update"):
            return state = action.payload
        case ("remove"):
            return state = action.payload
        default:
            return state
    }
}