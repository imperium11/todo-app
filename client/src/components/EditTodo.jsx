import { Button, Input, useDisclosure } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from 'react-hook-form';
import { updateTodo } from "../helpers/Crud";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';


function EditTodo({ todo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      'title': todo.t_title,
      'date': todo.t_date.slice(0, 10),
      'description': todo.t_description
    }
  });
  const queryClient = useQueryClient();
  const addTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      //Invalidate cache and refetch updated todo
      queryClient.invalidateQueries('todos');
    }
  });

  const formSubmit = (data) => {
    data.id = todo.t_id
    addTodoMutation.mutate(data);
    onClose();
  }

  return (
    <>
      <Button onClick={onOpen} bgColor='option.4' size='sm'>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='lg' closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Update Todo</ModalHeader>
          <ModalCloseButton />
           <ModalBody pb={5}>
              <Input 
                {...register('title', { 
                  required: true
                })} 
                placeholder='Title' mb={3}
              />
              <Input 
                {...register('date', {
                  required: true
                })} 
                placeholder='Select Due Date' 
                type="date" 
                mb={3}
              />
              <Input 
                {...register('description', { 
                  required: true
                })}  
                placeholder='Description' 
              />
          </ModalBody>
          <ModalFooter>
            <Button backgroundColor='option.1' mr={3} onClick={handleSubmit(formSubmit)}>Save</Button>
            <Button backgroundColor='option.7' onClick={onClose} >Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditTodo;