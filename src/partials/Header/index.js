import React from 'react';
import { Wrapper, Logo, childStyles } from './style';
import { ContentMiddle } from '../../style/style';

const Header = ({ styles = {} }) => {
  return (
    <Wrapper styles={styles.Wrapper}>
      <ContentMiddle styles={childStyles.ContentMiddle}>
        <Logo>YT Search</Logo>
      </ContentMiddle>
    </Wrapper>
  );
};

export default Header;
