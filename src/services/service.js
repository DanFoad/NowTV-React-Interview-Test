import { getMessages, getMembers } from '../data';

function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}

function getUserDetails() {
  return {
    type: 'USERS_LOADING',
    payload: getMembers()
  }
}

function r(length) {
  let rand = ""
  for (var i = 0; i < length; i++) {
    rand += Math.random().toString(36).charAt(2)
  }
  return rand
}

function generateId() {
  let id = r(8) + "-" + r(4) + "-" + r(4) + "-" + r(4) + "-" + r(12)
  return id
}

function sendMessage(text, currentUser) {
  return {
    type: 'MESSAGE_SENDING',
    payload: {
      "id": generateId(),
      "userId": currentUser,
      "message": text,
      "timestamp": new Date().toISOString()
    }
  }
}

export {
  getChatLog,
  getUserDetails,
  sendMessage,
}