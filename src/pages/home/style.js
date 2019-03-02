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
    width:240px;
    float:right;
`;

export const TopicsWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
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

