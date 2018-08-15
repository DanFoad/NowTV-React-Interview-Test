import reducer from './reducers/reducer';

it('should set messages in the store', () => {
  const messages = [{
    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    timestamp: '2017-02-09T04:27:38Z'
  }]

  const updatedStore = reducer({}, { type: 'MESSAGES_LOADING_FULFILLED', payload: messages });

  expect(updatedStore.messages).toEqual(messages);
});

it('should set users in the store', () => {
  const users = [{
    id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    firstName: "Albert",
    lastName: "Rose",
    email: "arosec@bbb.org",
    avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
    ip: "20.79.231.223"
  }]

  const updatedStore = reducer({}, { type: 'USERS_LOADING_FULFILLED', payload: users });

  expect(updatedStore.users).toEqual(users);
});

it('should add a new message when sent', () => {
  const message = {
    "id": "oi7a6pag-9t6e-tavl-qexz-hij2r7miorlx",
    "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
    "message": "test message",
    "timestamp": "2016-11-09T05:04:58Z"
  }

  const updatedStore = reducer({ messages: [] }, { type: 'MESSAGE_SENDING', payload: message });

  expect(updatedStore.messages[0]).toEqual(message);
})