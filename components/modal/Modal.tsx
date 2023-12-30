import {
  Box,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import fifa from "../../assets//logo/trophy.png";

interface Props {
  children: React.ReactNode;
}
interface modalProps {
  toOpenModal: boolean;
  toCloseModal: () => void;
  children: React.ReactNode;
}

const ModalDesign: React.FC<modalProps> = ({
  children,
  toOpenModal,
  toCloseModal,
}: modalProps) => {
  return (
    <>
      <Modal size={"6xl"} isOpen={toOpenModal} onClose={toCloseModal}>
        <ModalOverlay width={"100%"} />
        <ModalContent>
          <ModalHeader bg={"#8a1538"}>
            <Flex gap="2">
              <Button
                bg={"#7F1431"}
                variant="solid"
                onClick={toCloseModal}
                size={{ base: "sm", md: "md" }}
              >
                <Text color={"white"} fontSize={{ base: "xs", md: "md" }}>
                  Back to schedule
                </Text>
              </Button>
              <HStack>
                <Box bg="white" borderRadius={"full"} alignItems="center" display={{base:"none",md:"inline-block"}} >
                  <Image src={fifa} alt="Fifa" width="30" height="25" />
                </Box>
                <Text color={"#7A7B9E"} fontWeight="semibold">
                  {" "}
                  World Cup Group A{" "}
                </Text>
              </HStack>
            </Flex>
          </ModalHeader>
          <ModalCloseButton
            color={"red"}
            bg="white"
            _hover={{ bg: "#8a1538", color: "white" }}
          />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button onClick={toCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDesign;
