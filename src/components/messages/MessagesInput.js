import React from 'react'
import PropTypes from 'prop-types'

import './Messages.css'

class MessagesInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }

        this.isEnterPress = this.isEnterPress.bind(this)
        this.updateText = this.updateText.bind(this)
        this.submitText = this.submitText.bind(this)
    }

    getActionIcons() {
        return (
            <div className="messages-input__actions">
                <img src="/emoticon.png" alt="" />
                <img src="/attachment.png" alt="" />
            </div>
        )
    }

    isEnterPress(event) {
        if (event.keyCode === 13 && event.shiftKey === false) {
            event.preventDefault()
            this.submitText(this.textarea.value)
        }
    }

    updateText(event) {
        this.setState({ text: event.target.value })
    }

    submitText(event) {
        this.props.sendCallback(this.state.text)
        this.setState({ text: "" })
    }

    render() {
        return (
            <div className="messages-input">
                <textarea
                    ref={ el => this.textarea = el }
                    className="messages-input__textarea"
                    placeholder="Write a reply..."
                    value={ this.state.text }
                    onChange={ this.updateText }
                    onKeyUp={ this.isEnterPress }
                />
                { this.getActionIcons() }
                <button onClick={ this.submitText } className="messages-input__send">Send</button>
            </div>
        )
    }
}

MessagesInput.propTypes = {
    sendCallback: PropTypes.func,
}

export default MessagesInput