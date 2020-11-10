import React from 'react';
import { Lyrics, NextBtn } from './style';
import { ContentMiddle } from '../../style/style';

export default function Home() {
  return (
    <ContentMiddle>
      <h6>首頁</h6>
      <Lyrics>
        <h1>
          Rather than you,
          <br />
          she said I prefer solitude
          <br />
          <br />
          Rather the company
          <br />I prefer cigarrettes
        </h1>
      </Lyrics>
      <NextBtn>
        <a href="/form_1">下一層</a>
      </NextBtn>
    </ContentMiddle>
  );
}
