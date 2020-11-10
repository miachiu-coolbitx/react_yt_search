import React from 'react';
import { Wrapper, FormStyle } from './style';
import { ContentMiddle } from '../../style/style';

export default function Test(props) {
  return (
    <ContentMiddle>
      <FormStyle>
        <h2>內頁</h2>
        <a href="/">回首頁</a>
      </FormStyle>
    </ContentMiddle>
  );
}
