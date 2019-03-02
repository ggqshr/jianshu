import { fromJS } from "immutable";



const initialState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/11267773-639964dc43e7b5b8?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
            
        },
        {
            id: 2,
            title: '手绘',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/11267773-639964dc43e7b5b8?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
            
        }


    ],
})

export default (state = initialState, { type, payload }) => {
    switch (type) {


        default:
            return state
    }
}
