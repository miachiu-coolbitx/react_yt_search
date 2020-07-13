import styled from 'styled-components';
import flex from '../../style/flex';
import colors from '../../style/colors';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  background-color: ${colors.primary};
  transition: background-color 200ms linear;
  z-index: 9999;
  ${(props) => props.style}
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${colors.font};
  ${(props) => props.style}
`;

export const childStyles = {
  ContentMiddle: `
      ${flex.horizontal}
      ${flex.spaceBetween}
      ${flex.wrap}
      height: 100%;
    `,
};
