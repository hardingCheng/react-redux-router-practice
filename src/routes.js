import React from 'react'

import { Route} from "react-router-dom";
import App from "./components/App";
import SignUpPage from "./components/sign-up/SignUpPage";
import LoginPage from "./components/login/LoginPage"
import ShopPage from "./components/shop/ShopPage";
// 高阶组件  鉴权使用
import routeAuth from "./utils/routeAuth";
// 路由配置表
export default (
    <div className="container">
         <Route exact path="/" component={App}></Route>
         <Route exact path="/signup" component={SignUpPage}></Route>
         <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/shop" component={routeAuth(ShopPage)}></Route>
    </div>
)
