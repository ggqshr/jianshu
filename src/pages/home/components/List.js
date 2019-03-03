import React, { PureComponent } from 'react'
import { ListInfo, ListItem, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreater } from '../store';
import { Link} from 'react-router-dom';


class List extends PureComponent {
  render() {
    const artList = this.props.artList;
    return (
      <div>
        {artList.map((item, index) => {
          return (
            <Link key={item.get('id')} to='/detail'>
            <ListItem >
              <img className='pic' src={item.get('imgUrl')} />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            </Link>
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