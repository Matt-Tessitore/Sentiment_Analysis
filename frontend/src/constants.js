import configureStore from './store';
import { receiveMessage } from './actions';
import WS from './utils/websocket';

// Redux actions
export const RECEIVE_WEBSOCKET_MESSAGE = 'RECEIVE_WEBSOCKET_MESSAGE';
export const POST_WEBSOCKET_MESSAGE = 'POST_WEBSOCKET_MESSAGE';

export const CONNECT_TO_WEBSOCKET = 'CONNECT_TO_WEBSOCKET';
export const DISCONNECT_FROM_WEBSOCKET = 'DISCONNECT_FROM_WEBSOCKET';

// WebSocket Middleware
// This does not work
const sock = {
  ws: null,
  URL: 'http://127.0.0.1:8000/',
  wsDispatcher: (msg) => {
    return configureStore.dispatch(receiveMessage(msg));
  },
  wsListener: () => {
    const { lastAction } = configureStore().getState();
    switch (lastAction.type) {
    case POST_WEBSOCKET_MESSAGE:
      return sock.ws.postWebsocketMessage(lastAction.text);

    case CONNECT_TO_WEBSOCKET:
      return sock.startWS();

    case DISCONNECT_FROM_WEBSOCKET:
      return sock.stopWS();

    default:
      return null;
    }
  },
  stopWS: () => {
    sock.ws.close();
    sock.ws = null;
  },
  startWS: () => {
    if(!!sock.ws) sock.ws.close();
    sock.ws = new WS(sock.URL, sock.wsDipatcher);
  }
};
console.log('hi2');
configureStore().subscribe(() => sock.wsListener());
