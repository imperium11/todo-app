import axios from 'axios';
import EditTodo from './EditTodo';
import InputTodo from './InputTodo';
import { useState } from 'react';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

function AllTodos() {

  const { data: todos, isLoading } = useQuery({
    queryFn: () =>
      axios.get('http://localhost:3000/todos')
      .then(result => result.data),
    queryKey: ['todos']
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Box>
      
      <Button color='white' bg='option.6' size='lg' mt='20px'>Add</Button>
      <Box>
        {todos?.map(todo => {
          return (
            <Box key={todo.t_id}>
              <Box>{todo.t_title}</Box>
              <Box>{todo.t_date}</Box>
              <Box>{todo.t_description}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default AllTodos;