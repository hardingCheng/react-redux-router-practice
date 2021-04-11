import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as loginActions from "../actions/loginActions"
import { bindActionCreators } from "redux"
class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    loginOut = (e) => {
        e.preventDefault()
        this.props.loginAction.clearUser()
    }
    render() {
        const { isAuthenticated,user} = this.props.auth;
        const userLink = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <span className="nav-link" >{this.props.auth.user.username}</span>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" onClick={this.loginOut}>退出</a>
                </li>
            </ul>
        )
        const guestLink = (
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/login">登录 <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/signup">注册 <span className="sr-only">(current)</span></Link>
                </li>
            </ul>
        )
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Login功能</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {
                            isAuthenticated ? userLink : guestLink
                        }
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction:bindActionCreators(loginActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
