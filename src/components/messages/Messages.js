import React from 'react'
import PropTypes from 'prop-types'

import './Messages.css'

class Messages extends React.Component {
    componentDidMount() {
        this.refs.container.scrollTop = this.refs.container.scrollHeight
    }

    componentDidUpdate(prevProps, prevState) {
        this.refs.container.scrollTop = this.refs.container.scrollHeight
    }

    getUser(userId) {
        for (var i = 0; i < this.props.users.length; i++) {
            if (this.props.users[i].id === userId) {
            return this.props.users[i]
            }
        }
        return false
    }

    formatTimestamp(timestamp) {
        var datetime = new Date(Date.parse(timestamp))
        return datetime.toLocaleString()
    }

    getLoading() {
        return <div className="loading"><h1>Loading...</h1></div>
    }

    getSortedMessages() {
        let messages = [ ...this.props.messages ]
        messages.sort((a, b) => {
            var aTime = Date.parse(a.timestamp)
            var bTime = Date.parse(b.timestamp)
            return aTime - bTime
        })
        return messages
    }

    getMessages() {
        if (this.props.messages.length === 0)
            return this.getLoading()

        let messages = this.getSortedMessages()
        let messagesOutput = []

        for (var i in messages) {
            if (!messages.hasOwnProperty(i)) continue
            var message = messages[i]
            var user = this.getUser(message.userId)
            var messageClass = this.props.currentUser === message.userId ? "message current-user" : "message"
            if (!user) continue
            if (user.avatar == null) user.avatar = "/unknownuser.png"
            messagesOutput.push(
            <div key={message.id} className={ messageClass }>
                <div className="message-content">
                    <div className="user-details">
                        <img className="user-details__avatar" src={ user.avatar } alt="" />
                    </div>
                    <div className="message-details">
                        <p className="message-details__content" title={ user.email }>{ message.message }</p>
                    </div>
                </div>
                <div className="message-info">
                    <p className="user-details__name">{ user.firstName + " " + user.lastName }</p>
                    <p className="message-details__timestamp">{ this.formatTimestamp(message.timestamp) }</p>
                </div>
            </div>
            )
        }
        return messagesOutput
    }

    render() {
        return (
            <div className="messages" ref="container">
                { this.getMessages() }
            </div>
        )
    }
}

Messages.propTypes = {
    users: PropTypes.array,
    messages: PropTypes.array,
}

export default Messages