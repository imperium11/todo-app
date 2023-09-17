import { Button, Input, useDisclosure } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from 'react-hook-form';
import { addTodo } from "../helpers/Crud";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

function InputTodo() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      //Invalidate cache and refetch updated todo list
      queryClient.invalidateQueries('todos');
    }
  });
  
  const formSubmit = (data) => {
    addTodoMutation.mutate(data);
    onClose();
    reset();
  }

  return (
    <>
      <Button onClick={onOpen} color='white' bg='option.6' size='lg'>Add</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='lg' closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>New Todo</ModalHeader>
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
                placeholder='Description'/>
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

export default InputTodo;