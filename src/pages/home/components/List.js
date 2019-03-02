import React, { Component } from 'react'
import { ListInfo, ListItem } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const artList = this.props.artList;
    return (
      <div>
        {artList.map((item, index) => {
          return (
            <ListItem key={item.get('id')}>
              <img className='pic' src={item.get('imgUrl')} />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })}
        <ListItem>
          <img className='pic' src='https://upload-images.jianshu.io/upload_images/15400793-08a6c1afa56b1903?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240' />
          <ListInfo>
            <h3 className='title'>互联网运营必备的八大数据分析模型！</h3>
            <p className='desc'>今天来聊聊互联网运营中常用到的数据分析模型： 1、用户模型 “不仅要知道用户当下在想什么，更要知道用户背后在想什么，以及用户正在经历着什么。” ...</p>
          </ListInfo>
        </ListItem>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  artList: state.getIn(['home', 'artList']),
})


export default connect(mapStateToProps, null)(List);