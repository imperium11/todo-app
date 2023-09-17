import { Box, Button, Input, useDisclosure, Flex } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FormBox } from "../styles/Styles";


function InputTodo() {

  const { register, handleSubmit, reset } = useForm();

  const formSubmit = (data) => {
    
    console.log('data', data);
    onClose();
    reset();
  }

  const queryClient = useQueryClient();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} color='white' bg='option.6' size='lg'>Add</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
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
              <Input {...register('description')} placeholder='Description'/>
          </ModalBody>
          <ModalFooter>
            <Button backgroundColor='option.1' mr={3} onClick={handleSubmit(formSubmit)}>Save</Button>
            <Button backgroundColor='option.7' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InputTodo;