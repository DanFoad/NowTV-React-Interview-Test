import React, { Component } from 'react';

import MessagesContainer from '../../containers/messages/MessagesContainer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <MessagesContainer />
      </div>
    );
  }
}
