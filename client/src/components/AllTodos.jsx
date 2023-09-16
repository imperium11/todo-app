import axios from 'axios';
import EditTodo from './EditTodo';
import InputTodo from './InputTodo';
import { useState } from 'react';
import { Box, Button, ButtonGroup, Checkbox, Container, Flex, Stack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { formatDate } from '../helpers/Helpers';

function AllTodos() {

  const { data: todos, isLoading } = useQuery({
    queryFn: () =>
      axios.get('http://localhost:3000/todos')
        .then(result => result.data),
    queryKey: ['todos']
  });

  if (isLoading) {
    return <Box>Loading...</Box>
  }

  return (
    <Container fontWeight='600'>
      <InputTodo />
      <Stack spacing='10px' mt='40px' overflowY='auto' h='50vh'>
        {todos?.map(todo => {
          return (
            <Box key={todo.t_id} bgColor='option.5' border='2px solid' borderRadius='5px'>
              <Flex justifyContent='space-between' alignItems='center' padding='5px 5px' color='option.8'>
                <Flex>
                  <Checkbox size='lg' borderColor='option.8'></Checkbox>
                  <Box marginLeft='5px' fontSize='large'>{todo.t_title}</Box>
                </Flex>
                <Box>{formatDate(todo.t_date)}</Box>
              </Flex>
              <Flex justifyContent='space-between' alignItems='center' padding='5px 5px'>
                <Box  fontWeight='normal'>{todo.t_description}</Box>
                <Flex  justifyContent='space-between' w='120px'>
                  <Button bgColor='option.4' size='sm'>Edit</Button>
                  <Button bgColor='option.7' size='sm'>Delete</Button>
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}

export default AllTodos;