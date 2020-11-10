import React from 'react';
// /import { Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Wrapper } from './style/style';
import Header from './partials/Header/index';
import Content from './partials/Content/index';
import Form1 from './partials/Content/form';
import Test from './partials/Content/testpage';

export default function App(props) {
  const links = [
    { title: 'Link_1', url: '/form_1' },
    { title: 'Form2', url: '/test' },
  ];
  return (
    <div>
      {/* <Header links={links} /> */}
      {/* <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/form_1" component={Form1} />
          <Route path="/test" component={Test} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}
