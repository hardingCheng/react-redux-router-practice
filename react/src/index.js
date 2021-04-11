import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// 日志
import logger from 'redux-logger'
// 异步网路请求
import thunk from 'redux-thunk'
import jwtDecode from "jwt-decode"
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'
import { createStore,applyMiddleware } from "redux";
import {Provider} from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes"
import NavBar from "./components/NavBar";
import FlashMessageList from "./components/flash/FlashMessageList";
import setToken from "./utils/setToken";
import { setUser } from "./actions/loginActions";
// 加载 redux  及其中间件logger,thunk
const store  = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(logger,thunk)))
// 设置token
if (localStorage.getItem('token')){
    setToken(localStorage.getItem('token'))
    store.dispatch(setUser(jwtDecode(localStorage.getItem('token'))))
}
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          // 路由
          <Router routes = {routes}>
              <NavBar/>
              <FlashMessageList/>
              {routes}
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
