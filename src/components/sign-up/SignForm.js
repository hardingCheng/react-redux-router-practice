import React, {Component} from 'react';
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            passwordConfirmation:"",
            email:"",
            errors:{},
            isLoding:false
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        // 节流和防抖    回流和重绘
        this.setState({
            isLoding:true
        })
        this.props.signUpActions.userSignUpRequest(this.state).then(() => {
            this.setState({
                isLoding:false
            })
            this.props.flashMessageAction.addFlashMessage({
                type: "success",
                text: "注册成功欢迎你的加入"
            })
            setTimeout(() => {
                this.props.flashMessages.map((item) => {
                    this.props.flashMessageAction.deletedFlashMessage(item.id)
                })
                this.props.history.push("/login")
            },1000)
        },({response})=>{
            this.setState({
                errors:response.data,
                isLoding:false
            })
        })
    }
    render() {
        const {errors,isLoding} = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join Us</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" name="username" className={classnames("form-control",{"is-invalid":errors.username})} value={this.state.username} onChange={this.onChange}/>
                    {errors.username && <span className="form-text text-muted">{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="email" name="email"  className={classnames("form-control",{"is-invalid":errors.email})}  value={this.state.email} onChange={this.onChange}/>
                    {errors.email && <span className="form-text text-muted">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="password" name="password"  className={classnames("form-control",{"is-invalid":errors.password})}  value={this.state.password} onChange={this.onChange}/>
                    {errors.password && <span className="form-text text-muted">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">PasswordConfirmation</label>
                    <input type="password"  name="passwordConfirmation"  className={classnames("form-control",{"is-invalid":errors.passwordConfirmation})}  value={this.state.passwordConfirmation} onChange={this.onChange}/>
                    {errors.passwordConfirmation && <span className="form-text text-muted">{errors.passwordConfirmation}</span>}
                </div>
                <button disabled={isLoding} type="submit" className="btn btn-primary">注册</button>
            </form>
        );
    }
}
export default withRouter(SignForm);
