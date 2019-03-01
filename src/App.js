import React, { Component } from 'react';
// import { Globalstyle } from './style'
import Header from './common/header'
import { Globalstyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*为了使用全局样式，将此标签写在最外层的下一级中 */}
        <Globalstyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
