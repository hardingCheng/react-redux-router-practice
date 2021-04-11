import React, {Component} from 'react';
import classnames from "classnames";
import { withRouter } from "react-router-dom"
import validatorInput from "../../utils/vaildations/login"
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            errors:{},
            isLoding:false
        }
    }
    isValid = () => {
        const { errors,isValid  } = validatorInput(this.state)
        if (!isValid) {
            this.setState({
                errors
            })
        }
        return isValid
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLoding:true
        })
        if (this.isValid()){
            this.props.loginAction.userLogin(this.state).then((res) => {
                this.setState({
                    isLoding:false
                })

                this.props.history.push("/")
            },(err) => {
                this.setState({
                    errors:err.response.data.error,
                    isLoding:false
                })
            })
        }else {
            this.setState({
                isLoding:false
            })
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {errors,username,password,isLoding} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1>Login</h1>
                    {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                    <div className="form-group">
                        <label className="control-label">Username</label>
                        <input type="text" name="username" className={classnames("form-control",{"is-invalid":errors.form || errors.username})} value={this.state.username} onChange={this.onChange}/>
                        {errors.username && <span className="form-text text-muted">{errors.username}</span>}
                    </div>
                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input type="password" name="password"  className={classnames("form-control",{"is-invalid":errors.form || errors.password})}  value={this.state.password} onChange={this.onChange}/>
                        {errors.password && <span className="form-text text-muted">{errors.password}</span>}
                    </div>
                    <button disabled={isLoding} type="submit" className="btn btn-primary">登录</button>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);
