import { Header } from './styles/Styles';
import Animation from './components/Animation';
import AllTodos from './components/AllTodos';
import { Box, Flex } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Box textAlign='center'>
        <Header>My Todo List</Header>
        <Flex>
          <Box flex='0.35'>
            <Animation />
          </Box>
          <Box flex='0.65' display='flex' justifyContent='center' alignItems='center'>
              <AllTodos />
          </Box>
        </Flex>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
