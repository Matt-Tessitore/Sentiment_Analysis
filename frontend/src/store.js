import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import webSocketConnectionReducer from './reducers';

const rootReducer = combineReducers({
  websockets: webSocketConnectionReducer
});

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();
  middleware = [...middleware, loggerMiddleware];
}


export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middleware));
}
