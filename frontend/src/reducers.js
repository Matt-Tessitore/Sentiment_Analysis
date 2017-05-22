import {
    CONNECT_TO_WEBSOCKET, RECEIVE_WEBSOCKET_MESSAGE, DISCONNECT_FROM_WEBSOCKET,
    POST_WEBSOCKET_MESSAGE
} from './constants';

const initialState = {
  status: false,
  message: 'text'
};

function webSocketConnectionReducer(state = initialState, action) {

  switch (action.type) {

  case RECEIVE_WEBSOCKET_MESSAGE:
    return {
      ...state,
    };

  case CONNECT_TO_WEBSOCKET:
    return Object.assign({}, state, {
      status: true
    });

  case DISCONNECT_FROM_WEBSOCKET:
    return Object.assign({}, state, {
      status: false,
    });

  case POST_WEBSOCKET_MESSAGE:
    return Object.assign({}, state, {
      message: action.text,
    });

  default:
    return state;
  }

}

export default webSocketConnectionReducer;
