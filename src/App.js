import React, { Component } from 'react';
// import { Globalstyle } from './style'
import Header from './common/header'
import { Globalstyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/*为了使用全局样式，将此标签写在最外层的下一级中 */}
          <Globalstyle />
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
