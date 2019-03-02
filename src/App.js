import React, { Component } from 'react';
// import { Globalstyle } from './style'
import Header from './common/header'
import { Globalstyle } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/*为了使用全局样式，将此标签写在最外层的下一级中 */}
          <Globalstyle />
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact render={() => { return <div>home</div> }}></Route>
              <Route path='/detail' exact render={() => { return <div>detail</div> }}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
