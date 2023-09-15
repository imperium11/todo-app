import { Header } from './styles/Styles';
import Animation from './components/Animation';
import AllTodos from './components/AllTodos';
import { Box } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
      <Box textAlign='center'>
        <Header>My Todo List</Header>
        <Box display='flex'>
            <Box flex='0.35'>
              <Animation />
            </Box>
            <Box flex='0.65'>
              <QueryClientProvider client={queryClient}>
                <AllTodos />
              </QueryClientProvider>
            </Box>
          </Box>
      </Box>
  );
}

export default App;
