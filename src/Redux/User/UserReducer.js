import { UserActionTypes } from './UserTypes'

const INITIAL_STATE = {
    currentUser: null
}

const UserReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: actions.payload,
            }
        default:
            return state;
    }
}
export default UserReducer;
