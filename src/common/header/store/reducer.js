import * as  actionTypes from "./actionTypes";

const initialState = {
    focused: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.HANDLEFOCUS:
            {
                const newState = JSON.parse(JSON.stringify(state))
                newState.focused = true;
                return newState;
            }

        case actionTypes.HANDLEBLUR:
            {
                const newState = JSON.parse(JSON.stringify(state))
                newState.focused = false;
                return newState;
            }

        default:
            return state
    }
}