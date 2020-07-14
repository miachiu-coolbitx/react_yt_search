import React from 'react';
import { Wrapper } from './style/style';
import Header from './partials/Header/index';
import Content from './partials/Content/index';

export default function App() {
  const [term, setTerm] = React.useState('');
  const handleChange = () => {};
  const handleSearch = () => {};
  return (
    <Wrapper>
      <Header term={term} onSubmit={handleSearch} handleChange={handleChange} />
      <Content />
    </Wrapper>
  );
}
