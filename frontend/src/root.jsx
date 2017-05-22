import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap-grid.css';
import SearchTweet from './containers/searchTweet.jsx';
import configureStore from './store';

const store = configureStore();
const Root = () => {
  return (
    <div>
      <h1>Hi</h1>
      <Provider store={store}>
        <SearchTweet />
      </Provider>
    </div>
  );
};

render(
  <Root />,
    document.getElementById('root')
);

