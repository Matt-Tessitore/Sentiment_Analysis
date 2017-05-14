import React from 'react';
import { render } from 'react-dom';


import 'bootstrap/dist/css/bootstrap-grid.css';



const Root = () => {
  return (
      <div>
          <h1>Hi</h1>
      </div>
  )
};


render(
    <Root/>,
    document.getElementById('root')
);

