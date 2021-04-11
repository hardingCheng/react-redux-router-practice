import React from 'react';
import {connect} from "react-redux";
import {addFlashMessage,deletedFlashMessage} from "../actions/flashMessageActions"
import {withRouter} from "react-router-dom"
export default function (ComposeComponent) {
    class RouteAuth extends React.Component {
        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type: 'danger',
                    text : '请先登录!'
                })
                setTimeout(() => {
                    this.props.flashMessages.map((item) => {
                        this.props.deletedFlashMessage(item.id)
                    })
                    this.props.history.push("/login")
                },1000)
            }
        }
        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated){
                this.props.history.push("/login")
            }
        }

        render() {
            return (
                <ComposeComponent {...this.props}></ComposeComponent>
            );
        }
    }
    const mapStateToProps = (state) => {
        return {
            flashMessages: state.flashMessages,
            isAuthenticated:state.auth.isAuthenticated
        }
    }
    return withRouter(connect(mapStateToProps,{addFlashMessage,deletedFlashMessage})(RouteAuth))
}
