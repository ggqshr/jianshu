import React, { Component, Fragment } from 'react';
// import { Globalstyle } from './style'
import Header from './common/header'
import { Globalstyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'



class App extends Component {
  render() {
    return (
      <Provider store={}>
        <Globalstyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
