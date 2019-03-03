import React, { PureComponent } from 'react'
import { HomeWrapper, HomeRight, HomeLeft,BackTop } from './style'
import Topics from './components/Topics'
import Writer from './components/Writer'
import Recommand from './components/Recommand'
import List from './components/List'
import { connect } from 'react-redux'
import {actionCreater} from './store';

class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topics />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommand />
          <Writer />
        </HomeRight>
        <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
      </HomeWrapper>
    )
  }
  componentDidMount = () => {
    this.props.getHomeData()
  }

}

const mapDispatchToProps = (dis) => {
  return {
    getHomeData: () => {
      dis(actionCreater.getHomeData())
    }
  }
}


export default connect(null, mapDispatchToProps)(Home)