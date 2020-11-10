import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import Content from './partials/Content';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Switch> */}
    <Content />
    {/* </Switch>
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);
