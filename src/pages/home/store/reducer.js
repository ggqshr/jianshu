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
    artList:[
        {
            id:1,
            title:'互联网运营必备的八大数据分析模型！',
            desc:'今天来聊聊互联网运营中常用到的数据分析模型： 1、用户模型 “不仅要知道用户当下在想什么，更要知道用户背后在想什么，以及用户正在经历着什么。” ...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/15400793-08a6c1afa56b1903?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            id:2,
            title:'互联网运营必备的八大数据分析模型！',
            desc:'今天来聊聊互联网运营中常用到的数据分析模型： 1、用户模型 “不仅要知道用户当下在想什么，更要知道用户背后在想什么，以及用户正在经历着什么。” ...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/15400793-08a6c1afa56b1903?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            id:3,
            title:'互联网运营必备的八大数据分析模型！',
            desc:'今天来聊聊互联网运营中常用到的数据分析模型： 1、用户模型 “不仅要知道用户当下在想什么，更要知道用户背后在想什么，以及用户正在经历着什么。” ...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/15400793-08a6c1afa56b1903?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            id:4,
            title:'互联网运营必备的八大数据分析模型！',
            desc:'今天来聊聊互联网运营中常用到的数据分析模型： 1、用户模型 “不仅要知道用户当下在想什么，更要知道用户背后在想什么，以及用户正在经历着什么。” ...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/15400793-08a6c1afa56b1903?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        }
    ]
})

export default (state = initialState, { type, payload }) => {
    switch (type) {


        default:
            return state
    }
}
