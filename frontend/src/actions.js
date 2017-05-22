import {
    CONNECT_TO_WEBSOCKET,
    DISCONNECT_FROM_WEBSOCKET,
    RECEIVE_WEBSOCKET_MESSAGE,
    POST_WEBSOCKET_MESSAGE
} from './constants';


export function connectToWebsocket() {
  return {
    type: CONNECT_TO_WEBSOCKET
  };
}

export function disconnectFromWebsocket() {
  return {
    type: DISCONNECT_FROM_WEBSOCKET
  };
}

export function receiveMessage(message){
  return {
    type: RECEIVE_WEBSOCKET_MESSAGE,
    message
  };
}

export function postWebsocketMessage(text){
  return {
    type: POST_WEBSOCKET_MESSAGE,
    text
  };
}
