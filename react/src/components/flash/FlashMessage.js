import React, {Component} from 'react';
import classnames from 'classnames';
class FlashMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onClick = () => {
        this.props.flashMessageAction.deletedFlashMessage(this.props.message.id)
    }
    render() {
        const { type,text } = this.props.message;
        return (
            <div className={classnames('alert',{
                'alert-success' : type === 'success',
                'alert-danger' : type === 'danger'
            })}>
                {text}
                <button onClick={this.onClick} className={"close"}>&times;</button>
            </div>
        );
    }
}

export default FlashMessage;
