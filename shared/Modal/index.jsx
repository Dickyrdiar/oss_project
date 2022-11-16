import {
  Button, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  // ModalFooter,
  ModalHeader,
  ModalOverlay, Box,
} from '@chakra-ui/react';
import styled from 'styled-components';

function ModalLogin({ isOpen, onClose }) {
  return (
    <Wrapper>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader textAlign="center">Login First</ModalHeader>
            <Box padding="40px">
              <ModalBody textAlign="center">
                <Button>Login with github</Button>
              </ModalBody>
            </Box>
            <ModalCloseButton onClick={onClose} />
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 4px;
  background: transparent;
`;

export default ModalLogin;
