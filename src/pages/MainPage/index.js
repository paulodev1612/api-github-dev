import React from 'react';

import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from './styles';

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = React.useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="API GitHub" />
      <Title> API GitHub </Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={45} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
