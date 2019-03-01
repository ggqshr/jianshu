import { HANDLEFOCUS, HANDLEBLUR } from "../../../store/actionTypes";

const initialState = {
    focused: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case HANDLEFOCUS:
            {
                const newState = JSON.parse(JSON.stringify(state))
                newState.focused = true;
                return newState;
            }
            
        case HANDLEBLUR:
            {
                const newState = JSON.parse(JSON.stringify(state))
                newState.focused = false;
                return newState;
            }

        default:
            return state
    }
}