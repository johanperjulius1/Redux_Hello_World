import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';

const App = () => {
  const [greeting, setGreeting] = useState('Hello world from Johan')

  return (
    
      <Container>
        <Header as="h1">{greeting} </Header>
      </Container>
    
  )
};
export default App;