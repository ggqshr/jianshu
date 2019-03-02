import { fromJS } from "immutable";
import { actionTypes } from ".";



const initialState = fromJS({
    topicList: [],
    artList: []
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_HOME_DATA: {
            return state.merge({
                topicList: fromJS(payload.topicList),
                artList: fromJS(payload.artList)
            })
        }

        default:
            return state
    }
}
