import React from 'react';
//meta tags
import Helmet from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { Wrapper } from './style';
import { ContentMiddle } from '../../style/style';

export default function Content(props) {
  return (
    <Wrapper>
      <Helmet title="YT Search" />
      <ContentMiddle>
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
}
