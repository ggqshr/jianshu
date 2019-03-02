import styled from 'styled-components'


export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;


export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width:280px;
    float:right;
`;


export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;


export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color: #999;
    }
`;

export const TopicsWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const RecommandWrapper = styled.div`
    margin:30px 0; 
    width:280px;
`;
export const RecommandItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>{return props.imgUrl}});
    background-size:contain;
`;

export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    padding-right:10px;
    border-radius:4px;
    margin-left:18px;
    margin-bottom:18px; 
    .topic-pic{
        height:32px;
        width:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
`;

