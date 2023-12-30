import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../assets/logo/logoText.png";
import Argentina from "../../assets/country/arg.png";
import Brasil from "../../assets/country/brasil.png";
import { ArrowRightIcon } from "@chakra-ui/icons";
import TeamImage from "../Team";
import { convertTimeToLocalTime } from "../../utils/time";
import ModalDesign from "../modal/Modal";
import LiveDetail from "../liveDetail/LiveDetail";
import { useState } from "react";

type byDateProps = {
  dataByDate: {
    date: string;
    team1: string;
    match: string;
    team2: string;
    group?: string;
    time: any;
    location: string;
  }[];
};

const ScheduleByDate = ({ dataByDate }: byDateProps) => {
  const oka = {
    date: "24 Nov",
    team1: "Brazil",
    team1Flag: Brasil,
    match: "16",
    team2: "Argentina",
    team2Flag: Argentina,
    group: "G",
    time: "22:00",
    location: "Lusail Stadium",
  };
  const [clickedData, setClickedData] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalOpen = (item: any) => {
    onOpen();
    setClickedData(item);
  };
  return (
    <>
      {dataByDate.map((item, index) => (
        <Box
        // bg={red.100}
          key={index}
          p={{ base: "0.5rem", md: "1rem" }}
          bg="#FFFFFF"
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          }
          borderRadius="10"
          border={"1px solid gray.300"}
          my="6"
          
        >
          <Flex align={"center"} justify="center">
            <Box w={{ base: "100%", md: "50%" }}>
              {" "}
              <Text fontSize={"lg"} fontWeight="500">
                FIFA World Cup 2022
              </Text>
            </Box>
            <Spacer />
            <Box w="50%" display={{ base: "none", md: "flex" }}>
              <Image src={logo} alt="logo" width={80} height="60" />
             
            </Box>
          </Flex>
          <Text fontSize={"xl"} fontWeight="500" my={4}>
            Group {item.group}
          </Text>

          <Box
            bg={"#F4F6FC"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"
            }
            borderRadius="10"
            _hover={{
              border: "1px solid #5695DD",
            }}
          >
            <Flex justify={"space-between"} p="2" align={"center"}>
              <Text
                color={"black"}
                fontWeight="500"
                fontSize={"sm"}
                display={{ base: "none", md: "flex" }}
              >
                {item.location}
              </Text>
              <Box display={"flex"} flexDir="row" gap={"4"}>
                <HStack gap="2">
                  <Text color={"black"} fontWeight="500" fontSize={"md"}>
                    {" "}
                    {item.team1}
                  </Text>
              <Box display={{md:"inline-block",base:"none"}} >
              

                  <TeamImage name={item.team1} />
                  </Box>
                </HStack>
                <Text fontSize={"lg"} fontWeight="600">
                  {convertTimeToLocalTime(item.time).substring(0, 9)}
                </Text>

                <HStack gap="2">
                <Box display={{md:"inline-block",base:"none"}} >
                  <TeamImage name={item.team2} />
                  </Box>

                  <Text color={"black"} fontWeight="500" fontSize={"md"}>
                    {" "}
                    {item.team2}
                  </Text>
                </HStack>
              </Box>
              <Button
                fontSize={"sm"}
                color="white"
                cursor={"pointer"}
                _hover={{
                  bg: "gray.300",
                }}
                bg="none"
                onClick={() => handleModalOpen(item)}
              >
                <ArrowRightIcon color={"black"} />
              </Button>
            </Flex>
          </Box>

          <ModalDesign toOpenModal={isOpen} toCloseModal={onClose}>
            <LiveDetail data={clickedData} />
          </ModalDesign>
        </Box>
      ))}
    </>
  );
};

export default ScheduleByDate;
