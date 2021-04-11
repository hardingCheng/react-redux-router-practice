import React, {Component} from 'react';
import FlashMessage from './FlashMessage'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as flashMessageAction from "../../actions/flashMessageActions";

class FlashMessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const message = this.props.message.map(message =>{
           return <FlashMessage key={message.id} message={message} flashMessageAction={this.props.flashMessageActions}/>
        })
        return (
            <div className="container">
                {message}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        message:state.flashMessages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        flashMessageActions:bindActionCreators(flashMessageAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FlashMessageList);
