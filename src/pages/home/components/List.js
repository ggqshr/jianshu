import React, { PureComponent } from 'react'
import { ListInfo, ListItem, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreater } from '../store';

class List extends PureComponent {
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
        <LoadMore onClick={()=>this.props.getMore(this.props.page)}>
          更多文字
        </LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  artList: state.getIn(['home', 'artList']),
  page:state.getIn(['home','nextPage'])
})

const mapDispatchToProps = (dis) => {
  return {
    getMore: (page) => {
      dis(actionCreater.getMore(page))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);