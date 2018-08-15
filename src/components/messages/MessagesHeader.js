import React from 'react'
import PropTypes from 'prop-types'

import './Messages.css'

class MessagesHeader extends React.Component {
    getUserAvatars() {
        let avatars = []
        let users = [ ...this.props.users ]
        let length = users.length
        let additional = <span />

        if (users.length > 5) {
            length = 5;
            additional = <span className="messages-header__additional">+{ users.length - 5 }...</span>
        }

        for (var i = 0; i < length; i++) {
            if (users[i].avatar == null) users[i].avatar = "/unknownuser.png"
            avatars.push( <img key={ i } className="messages-header__avatar" src={ users[i].avatar } alt="" /> )
        }

        return (
            <div className="messages-header__avatars">
                { avatars }
                { additional }
            </div>
        )
    }

    getChatTitle() {
        return <h2>{ this.props.chatTitle }</h2>
    }

    render() {
        return (
            <div className="messages-header">
                { this.getUserAvatars() }
                { this.getChatTitle() }
                <div className="messages-header__settings">
                    <img src="/settings.png" alt="" />
                </div>
            </div>
        )
    }
}

MessagesHeader.propTypes = {
    users: PropTypes.array,
}

export default MessagesHeader