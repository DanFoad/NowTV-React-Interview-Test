import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { store } from '../../store';

import { getChatLog, getUserDetails, sendMessage } from '../../services/service';

import Messages from '../../components/messages/Messages';
import MessagesHeader from '../../components/messages/MessagesHeader';
import MessagesInput from '../../components/messages/MessagesInput';

class MessagesContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            messages: [],
            currentUser: ""
        }

        this.sendCallback = this.sendCallback.bind(this)
    }

    componentDidMount() {
        store.dispatch(getChatLog())
        store.dispatch(getUserDetails())
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.users,
            messages: nextProps.messages,
            currentUser: nextProps.currentUser
        })
    }

    sendCallback(text) {
        store.dispatch(sendMessage(text, this.state.currentUser))
    }

    render() {
        return (
            <div className="messages-container">
                <MessagesHeader
                    users={ this.state.users }
                    chatTitle="Group Chat"
                />
                <Messages
                    users={ this.state.users }
                    messages={ this.state.messages }
                    currentUser={ this.state.currentUser }
                />
                <MessagesInput
                    sendCallback={ this.sendCallback }
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.messages,
    users: state.users,
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, getUserDetails, sendMessage }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesContainer);
  