import { useState } from 'react';
import './App.css';
import { AppContainer, Box, LeftBox, Header, RightBox } from './styles/Styles';
import Notebook from './components/Notebook';

function App() {

  return (
    <AppContainer>
      <Header> My Todo List</Header>
      <Box>
        <LeftBox>
          <Notebook />
        </LeftBox>
        <RightBox>

        </RightBox>
      </Box>
    </AppContainer>

  )
}

export default App;
