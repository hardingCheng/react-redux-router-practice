import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as loginAction from "../../actions/loginActions";
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <LoginForm loginAction={this.props.loginActions}/>
                </div>
                <div className="col-sm-3"></div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginActions:bindActionCreators(loginAction,dispatch),
    }
}

export default connect(null,mapDispatchToProps)(LoginPage);
