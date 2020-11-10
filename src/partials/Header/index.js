import React from 'react';
import { Wrapper, Logo, childStyles } from './style';
import { ContentMiddle } from '../../style/style';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

export default function Header(props) {
  const { links } = props;
  const linkStyle = {
    paddingLeft: '10px',
    color: '#8F9BB3',
    transition: '0.3s',
    '&:hover': {
      color: '#000000',
    },
  };
  return (
    <Wrapper>
      <ContentMiddle styles={childStyles.ContentMiddle}>
        <a href="/">
          <Logo>OnePAge</Logo>
        </a>
        <Toolbar component="nav" variant="dense">
          {links.map((link) => (
            <Link style={linkStyle} noWrap key={link.title} href={link.url}>
              {link.title}
            </Link>
          ))}
        </Toolbar>
      </ContentMiddle>
    </Wrapper>
  );
}
