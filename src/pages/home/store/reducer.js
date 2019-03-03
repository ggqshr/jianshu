import { fromJS } from "immutable";
import { actionTypes } from ".";



const initialState = fromJS({
    topicList: [],
    artList: [],
    nextPage :1,
})

export default (state = initialState, { type, payload ,page}) => {
    switch (type) {
        case actionTypes.GET_HOME_DATA: {
            return state.merge({
                topicList: fromJS(payload.topicList),
                artList: fromJS(payload.artList)
            })
        }
        case actionTypes.GET_MORE:{
            return state.merge(
                {
                    artList:state.get('artList').concat(payload),
                    nextPage:page,
                }
            )
        }
        default:
            return state
    }
}
