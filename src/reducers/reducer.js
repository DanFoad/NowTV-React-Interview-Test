export default function reducer(state, action = {}) {
    switch (action.type) {
      case 'MESSAGES_LOADING_FULFILLED':
        return {
          ...state,
          messages: action.payload
        }
      case 'USERS_LOADING_FULFILLED':
        return {
          ...state,
          users: action.payload
        }
      case 'MESSAGE_SENDING':
        return {
          ...state,
          messages: [ ...state.messages, action.payload ]
        }
      default:
        return state
    }
}