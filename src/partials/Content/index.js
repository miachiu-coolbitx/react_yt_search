import React from 'react';
//meta tags
import Helmet from 'react-helmet';
import { Wrapper } from './style';

const Content = () => {
  return (
    <Wrapper>
      <Helmet title="YT Search" />
      <ContentMiddle styles={childStyles.ContentMiddle}>
        <Grid container>
          <Grid item sm={9}>
            {/* <Item /> */}
            {/* <Description /> */}
          </Grid>
          <Grid item sm={3}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </ContentMiddle>
    </Wrapper>
  );
};

export default Content;
