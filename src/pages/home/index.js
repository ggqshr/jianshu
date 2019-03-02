import React, { Component } from 'react'
import {HomeWrapper,HomeRight,HomeLeft} from './style'
import Topics from './components/Topics'
import Writer from './components/Writer'
import Recommand from './components/Recommand'
import List from './components/List'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img 
          className='banner-img'
          src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topics />
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommand/>
          <Writer/>
        </HomeRight>
        </HomeWrapper>
    )
  }
}
