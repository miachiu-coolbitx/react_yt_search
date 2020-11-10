import React from 'react';
import { Wrapper, FormStyle } from './style';
import { ContentMiddle } from '../../style/style';
import Form from '../../components/form';
import Header from '../Header/index';

export default function Form1(props) {
  return (
    <div>
      {/* <Header links={links} /> */}
      <ContentMiddle>
        <FormStyle>
          <Form />
          <a href="/test">下一層</a>
        </FormStyle>
      </ContentMiddle>
    </div>
  );
}
