import React, { Component } from 'react'
import { ListInfo, ListItem,LoadMore } from '../style'
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
        <LoadMore>
          更多文字
        </LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  artList: state.getIn(['home', 'artList']),
})


export default connect(mapStateToProps, null)(List);