import { Button } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../helpers/Crud";



function DeleteTodo({ t_id }) {
  const queryClient = useQueryClient();
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      //Invalidate cache and refresh data
      queryClient.invalidateQueries('todos');
    }
  });

  return (
    <>
      <Button 
        onClick={() => deleteTodoMutation.mutate(t_id)}
        bgColor='option.7' 
        size='sm'
      >
        Delete
      </Button>
    </>
  );
}

export default DeleteTodo;