import React, {Component} from 'react';
import SignForm from './SignForm'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as signUpAction from "../../actions/signUpActions";
import * as flashMessageAction from "../../actions/flashMessageActions";
class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <SignForm flashMessages={this.props.flashMessages} signUpActions={this.props.signUpActions} flashMessageAction={this.props.flashMessageActions}/>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        flashMessages:state.flashMessages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUpActions:bindActionCreators(signUpAction,dispatch),
        flashMessageActions:bindActionCreators(flashMessageAction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage) ;
