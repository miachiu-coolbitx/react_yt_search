import React from 'react';
//meta tags
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Wrapper, FormStyle } from './style';
import { ContentMiddle } from '../../style/style';
import Form from '../../components/form';
import Header from '../Header/index';
import Home from './home';
import Form1 from './form';
import Test from './testpage';

export default function Content(props) {
  const links = [
    { title: 'Link_1', url: '/form_1' },
    { title: 'Form2', url: '/test' },
  ];
  return (
    <div>
      <Helmet title="React OnePage" />
      <Wrapper>
        {/* <Header links={links} /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form_1" component={Form1} />
            <Route path="/test" component={Test} />
          </Switch>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}
